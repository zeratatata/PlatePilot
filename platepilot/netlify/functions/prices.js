'use strict';
// PlatePilot v5 — M&S Food prices via Ocado online (Apify data provider).
// No retailer or Apify secrets reach the browser. This is NOT M&S Foodhall shelf pricing.
const API = 'https://api.apify.com/v2';
const ACTOR = 'zaiq~ocado-scraper';
const MAX_INGREDIENTS = 32;
const JHEAD = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
function output(statusCode, body) { return {statusCode, headers: JHEAD, body: JSON.stringify(body)}; }
function sanitized(items) {
  if (!Array.isArray(items) || items.length < 1 || items.length > MAX_INGREDIENTS) return null;
  const unique = new Set();
  return items.map(i => {
    const id = typeof i.id === 'string' ? i.id.slice(0,60) : '';
    const name = typeof i.name === 'string' ? i.name.trim().slice(0,90) : '';
    const unit = ['g','ml','each'].includes(i.unit) ? i.unit : '';
    if (!/^[a-zA-Z0-9_-]+$/.test(id) || !name || !unit || unique.has(id)) return null;
    unique.add(id);return {id,name,unit};
  }).every(Boolean) ? items.map(i=>({id:i.id.slice(0,60),name:i.name.trim().slice(0,90),unit:i.unit})) : null;
}
function tokens(s) {
 return String(s||'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9\s]/g,' ').split(/\s+/)
 .filter(t=>t.length>1&&!['ms','and','marks','spencer','ocado','food','british','free','range','selected','fresh','pack','the','with','for','organic','of','sliced','prepared'].includes(t))
 .map(t=>t.endsWith('ies')?t.slice(0,-3)+'y':t.endsWith('es')&&t.length>5?t.slice(0,-2):t.endsWith('s')&&t.length>4?t.slice(0,-1):t);
}
function packInfo(p){
 const q=Number(p.quantity), unit=String(p.quantityUnit||'').toLowerCase();
 if(Number.isFinite(q)&&q>0){
  if(unit==='g'||unit==='ml'||unit==='each'||unit==='item'||unit==='items')return {pack:q,unit:unit.startsWith('item')?'each':unit};
  if(unit==='kg')return {pack:q*1000,unit:'g'};
  if(unit==='l'||unit==='litre'||unit==='litres')return {pack:q*1000,unit:'ml'};
 }
 const size=String(p.size||p.packSize||p.name||'').toLowerCase();
 const m2=size.match(/\b(\d+)\s*[x×]\s*(\d+(?:\.\d+)?)\s*(g|ml)\b/);
 if(m2)return {pack:Number(m2[1])*Number(m2[2]),unit:m2[3]};
 const m=size.match(/(\d+(?:\.\d+)?)\s*(kg|g|ml|l|litre|litres|pack|pk|eggs|pcs)\b/);
 if(m){const n=Number(m[1]),u=m[2];
   if(u==='kg')return {pack:n*1000,unit:'g'};
   if(u==='g')return {pack:n,unit:'g'};
   if(u==='l'||u.startsWith('litre'))return {pack:n*1000,unit:'ml'};
   if(u==='ml')return {pack:n,unit:'ml'};
   return {pack:n,unit:'each'};
 }
 return null;
}
function isMS(p){
 const name=String(p.name||''),brand=String(p.brand||'');
 return /(?:^|\b)m\s*&\s*s(?:\b|$)|marks\s*(?:&|and)\s*spencer/i.test(brand) || /(?:^|\b)m\s*&\s*s(?:\b|$)|marks\s*(?:&|and)\s*spencer/i.test(name);
}
function matchPrices(ingredients,products){
 const out={};
 for(const ing of ingredients){
  let best=null,top=0;
  const desired=tokens(ing.name);
  for(const p of products){
   if(!p||!isMS(p)||p.available===false||p.inStock===false||p.availability==='out_of_stock')continue;
   const price=Number(p.price), size=packInfo(p),name=String(p.name||'');
   if(!(price>0&&price<200&&size&&size.unit===ing.unit&&size.pack>0&&size.pack<100000))continue;
   const possible=tokens(name);const overlap=desired.filter(t=>possible.some(w=>w===t||(t.length>=5&&w.startsWith(t)))).length;
   if(!overlap)continue;
   let score=(overlap/desired.length)*10+overlap;
   if(desired.length>=2&&overlap<2)score-=3;
   if(/\b(ready meal|sandwich|pizza|soup|sauce|kit|seasoned|marinated|cooked|meal deal)\b/i.test(name))score-=7;
   if(/\b(multipack|selection|mixed|assorted)\b/i.test(name))score-=1;
   // Only prefer a discounted listing when the ingredient match is otherwise comparable.
   const was=Number(p.wasPrice);
   const currentOffer=Number.isFinite(was)&&was>price&&was<200;
   if(currentOffer)score+=0.5;
   if(score>top){
    const multibuys=(Array.isArray(p.promotions)?p.promotions:[]).filter(q=>{
      const n=Number(q.requiredQuantity), offerPrice=Number(q.price);
      return Number.isInteger(n)&&n>=2&&n<=20&&offerPrice>0&&offerPrice<price*n;
    }).slice(0,4).map(q=>({quantity:Number(q.requiredQuantity),price:Number(q.price),text:String(q.text||p.promotionText||'Multibuy offer').slice(0,100)}));
    top=score;best={name:name.slice(0,150),price:Math.round(price*100)/100,pack:size.pack,unit:size.unit,url:/^https:\/\/www\.ocado\.com\//.test(p.productUrl||p.url||'')?(p.productUrl||p.url):'',source:'M&S Food on Ocado',checkedAt:new Date().toISOString(),wasPrice:currentOffer?Math.round(was*100)/100:null,multibuys,offerText:String(p.promotionText||'').slice(0,110),onOffer:!!p.onOffer};
   }
  }
  if(best&&top>=5)out[ing.id]=best;
 }
 return out;
}
async function apify(path,token,options={}){
 const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),8200);
 try{
  const r=await fetch(API+path,{...options,headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},signal:controller.signal});
  if(!r.ok)throw new Error(`Pricing provider returned ${r.status}`);
  return await r.json();
 }finally{clearTimeout(timer)}
}
exports.handler=async function(event){
 if(event.httpMethod==='GET')return output(200,{configured:!!process.env.APIFY_TOKEN&&!!process.env.PRICE_REFRESH_CODE,provider:'M&S Food via Ocado; not Foodhall prices'});
 if(event.httpMethod!=='POST')return output(405,{error:'Method not allowed'});
 if(!process.env.APIFY_TOKEN || !process.env.PRICE_REFRESH_CODE)return output(503,{error:'Live prices are not configured yet. See the README for Netlify setup.'});
 if((event.body||'').length>12000)return output(413,{error:'Request too large'});
 let payload;try{payload=JSON.parse(event.body||'{}')}catch(e){return output(400,{error:'Invalid request'})}
 if(typeof payload.code!=='string'||!payload.code||payload.code!==process.env.PRICE_REFRESH_CODE)return output(401,{error:'Incorrect private price refresh code'});
 const items=sanitized(payload.ingredients);
 if(!items)return output(400,{error:'Invalid ingredients (1–32 per refresh)'});
 try{
  if(payload.action==='start'){
   const searchTerms=items.map(i=>'M&S '+i.name).slice(0,MAX_INGREDIENTS);
   const result=await apify(`/acts/${ACTOR}/runs`,process.env.APIFY_TOKEN,{method:'POST',body:JSON.stringify({searchTerms,maxItems:Math.min(360,items.length*12),includeDetails:false,trackPrices:false})});
   const runId=result?.data?.id;
   if(!runId)return output(502,{error:'Price provider did not start the search'});
   return output(200,{status:'started',runId});
  }
  if(payload.action==='poll'){
   const id=String(payload.runId||'');if(!/^[a-zA-Z0-9_-]{8,60}$/.test(id))return output(400,{error:'Invalid price search reference'});
   const r=await apify(`/actor-runs/${id}`,process.env.APIFY_TOKEN);
   const status=r?.data?.status;
   if(['FAILED','ABORTED','TIMED-OUT'].includes(status))return output(200,{status:'failed',error:`Price search ${status.toLowerCase().replace('-',' ')}`});
   if(status!=='SUCCEEDED')return output(200,{status:'working'});
   const datasetId=r?.data?.defaultDatasetId;
   if(!/^[a-zA-Z0-9_-]{5,60}$/.test(datasetId||''))return output(502,{error:'Price provider returned no dataset'});
   const rows=await apify(`/datasets/${datasetId}/items?format=json&clean=1&limit=500`,process.env.APIFY_TOKEN);
   if(!Array.isArray(rows))return output(502,{error:'Unexpected price data'});
   const prices=matchPrices(items,rows);
   return output(200,{status:'done',prices,matched:Object.keys(prices).length,requested:items.length,source:'M&S on Ocado online'});
  }
  return output(400,{error:'Unknown action'});
 }catch(err){return output(502,{error:err.message==='This operation was aborted'?'Pricing provider took too long':String(err.message||'Price provider unavailable').slice(0,150)})}
};
exports._internal={matchPrices,packInfo,sanitized,tokens};
