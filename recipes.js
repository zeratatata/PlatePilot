/* PlatePilot: original recipes and illustrative UK grocery price data.
   Nutrition and prices are approximate, not clinical or live retailer data. */
const PANTRY = {
  chicken:['Chicken breast','Meat & fish','g',500,4.25,165,31,0,3.6,[]],
  thigh:['Chicken thighs','Meat & fish','g',600,3.60,177,24,0,9,[]],
  turkey:['Turkey mince','Meat & fish','g',500,3.65,150,25,0,5,[]],
  beef:['Lean beef mince','Meat & fish','g',500,4.75,175,26,0,8,[]],
  sausage:['Pork sausages','Meat & fish','g',400,2.75,260,14,7,19,['gluten']],
  salmon:['Salmon fillets','Meat & fish','g',260,4.60,208,20,0,13,['fish']],
  cod:['Cod fillets','Meat & fish','g',250,4.10,82,18,0,1,['fish']],
  prawns:['King prawns','Meat & fish','g',180,3.25,99,24,0,0.3,['shellfish']],
  tuna:['Tinned tuna','Tins & jars','g',145,1.25,116,26,0,1,['fish']],
  tofu:['Firm tofu','Chilled & dairy','g',400,2.20,123,13,2,7,['soy']],
  egg:['Eggs','Chilled & dairy','each',6,1.65,74,6.3,0.4,5,['egg']],
  halloumi:['Halloumi','Chilled & dairy','g',225,2.45,313,22,2,25,['dairy']],
  feta:['Feta cheese','Chilled & dairy','g',200,2.15,265,14,4,21,['dairy']],
  cheddar:['Cheddar','Chilled & dairy','g',400,3.15,403,25,1.3,33,['dairy']],
  mozzarella:['Mozzarella','Chilled & dairy','g',125,0.95,254,18,2,19,['dairy']],
  yoghurt:['Greek yoghurt','Chilled & dairy','g',500,1.75,97,8,4,5,['dairy']],
  cream:['Single cream','Chilled & dairy','ml',300,1.25,190,3,3,19,['dairy']],
  milk:['Milk','Chilled & dairy','ml',1000,1.50,63,3.4,5,3.5,['dairy']],
  parmesan:['Parmesan','Chilled & dairy','g',150,2.35,431,38,4,29,['dairy']],
  rice:['Long grain rice','Pasta, rice & grains','g',1000,1.60,350,7,78,0.7,[]],
  basmati:['Basmati rice','Pasta, rice & grains','g',1000,2.25,350,7,77,0.8,[]],
  pasta:['Dried pasta','Pasta, rice & grains','g',500,0.90,355,12,72,1.5,['gluten']],
  noodles:['Egg noodles','Pasta, rice & grains','g',250,1.25,350,12,68,4,['gluten','egg']],
  rice_noodles:['Rice noodles','Pasta, rice & grains','g',250,1.60,350,7,78,0.5,[]],
  couscous:['Couscous','Pasta, rice & grains','g',500,1.25,376,13,77,0.6,['gluten']],
  quinoa:['Quinoa','Pasta, rice & grains','g',300,2.15,368,14,64,6,[]],
  tortilla:['Tortilla wraps','Bakery','each',8,1.65,190,5,33,4.5,['gluten']],
  bread:['Sliced bread','Bakery','each',16,1.35,95,3.5,17,1,['gluten']],
  pita:['Pitta bread','Bakery','each',6,1.05,160,5,32,1,['gluten']],
  gnocchi:['Potato gnocchi','Pasta, rice & grains','g',500,1.70,165,4,35,0.7,['gluten']],
  potato:['Potatoes','Fruit & vegetables','g',2000,1.65,77,2,17,0.1,[]],
  sweetpotato:['Sweet potatoes','Fruit & vegetables','g',1000,1.75,86,1.6,20,0.1,[]],
  onion:['Onions','Fruit & vegetables','g',1000,1.10,40,1.1,9,0.1,[]],
  garlic:['Garlic','Fruit & vegetables','g',90,0.65,149,6.4,33,0.5,[]],
  pepper:['Bell peppers','Fruit & vegetables','g',450,1.65,31,1,6,0.3,[]],
  broccoli:['Broccoli','Fruit & vegetables','g',350,0.89,34,2.8,7,0.4,[]],
  spinach:['Baby spinach','Fruit & vegetables','g',240,1.45,23,2.9,3.6,0.4,[]],
  tomato:['Tomatoes','Fruit & vegetables','g',600,1.55,18,0.9,3.9,0.2,[]],
  cherry:['Cherry tomatoes','Fruit & vegetables','g',300,1.29,18,0.9,3.9,0.2,[]],
  cucumber:['Cucumber','Fruit & vegetables','g',300,0.75,15,0.7,3.6,0.1,[]],
  carrot:['Carrots','Fruit & vegetables','g',1000,0.70,41,0.9,10,0.2,[]],
  mushroom:['Mushrooms','Fruit & vegetables','g',300,1.25,22,3.1,3.3,0.3,[]],
  courgette:['Courgettes','Fruit & vegetables','g',500,1.25,17,1.2,3.1,0.3,[]],
  spring:['Spring onions','Fruit & vegetables','g',100,0.75,32,1.8,7,0.2,[]],
  lettuce:['Lettuce','Fruit & vegetables','g',200,0.89,15,1.4,2.9,0.2,[]],
  avocado:['Avocado','Fruit & vegetables','each',2,1.65,240,3,12,22,[]],
  lemon:['Lemons','Fruit & vegetables','each',3,0.95,17,0.6,5,0.2,[]],
  lime:['Limes','Fruit & vegetables','each',3,0.95,20,0.5,7,0.1,[]],
  ginger:['Fresh ginger','Fruit & vegetables','g',100,0.75,80,1.8,18,0.8,[]],
  cauliflower:['Cauliflower','Fruit & vegetables','g',600,1.29,25,1.9,5,0.3,[]],
  peas:['Frozen peas','Frozen','g',900,1.65,81,5.4,14,0.4,[]],
  mixedveg:['Mixed vegetables','Frozen','g',1000,1.55,65,3,12,0.5,[]],
  greenbeans:['Green beans','Frozen','g',500,1.35,31,1.8,7,0.1,[]],
  chickpeas:['Chickpeas','Tins & jars','g',240,0.55,164,8.9,27,2.6,[]],
  kidney:['Kidney beans','Tins & jars','g',240,0.55,127,8.7,23,0.5,[]],
  blackbeans:['Black beans','Tins & jars','g',240,0.69,132,8.9,24,0.5,[]],
  lentils:['Red lentils','Pasta, rice & grains','g',500,1.25,350,25,60,1.5,[]],
  tomatoes:['Chopped tomatoes','Tins & jars','g',400,0.49,22,1.2,4,0.1,[]],
  passata:['Passata','Tins & jars','g',500,0.65,30,1.4,6,0.2,[]],
  coconut:['Coconut milk','Tins & jars','ml',400,1.15,180,2,3,18,[]],
  stock:['Stock cubes','Tins & jars','each',10,0.79,14,0.5,2,0.5,[]],
  sweetcorn:['Sweetcorn','Tins & jars','g',260,0.79,86,3.3,19,1.4,[]],
  pesto:['Basil pesto','Tins & jars','g',190,1.25,455,5,6,46,['dairy','nuts']],
  curry:['Curry paste','Sauces & spices','g',180,1.35,130,2,16,6,[]],
  soy:['Soy sauce','Sauces & spices','ml',150,1.15,53,8,5,0,['soy','gluten']],
  honey:['Honey','Sauces & spices','g',340,1.89,304,0.3,82,0,[]],
  peanut:['Peanut butter','Sauces & spices','g',340,1.45,590,25,20,50,['nuts']],
  oil:['Olive oil','Sauces & spices','ml',500,3.50,820,0,0,91,[]],
  sesame:['Sesame oil','Sauces & spices','ml',150,2.15,820,0,0,91,['sesame']],
  paprika:['Paprika','Sauces & spices','g',40,0.79,280,14,54,13,[]],
  cumin:['Ground cumin','Sauces & spices','g',45,0.79,375,18,44,22,[]],
  curry_powder:['Curry powder','Sauces & spices','g',80,0.89,325,14,58,14,[]],
  oregano:['Mixed herbs','Sauces & spices','g',18,0.69,276,9,52,4,[]],
  chilli:['Chilli flakes','Sauces & spices','g',35,0.79,318,12,57,17,[]],
  salt:['Salt','Sauces & spices','g',750,0.65,0,0,0,0,[]],
  peppercorn:['Black pepper','Sauces & spices','g',50,0.85,250,10,64,3,[]],
  mustard:['Dijon mustard','Sauces & spices','g',185,0.95,110,7,5,7,['mustard']],
  flour:['Plain flour','Baking','g',1000,0.75,364,10,76,1,['gluten']],
  sugar:['Caster sugar','Baking','g',500,0.89,400,0,100,0,[]]
};
const ING = Object.fromEntries(Object.entries(PANTRY).map(([id,v])=>[id,{id,name:v[0],aisle:v[1],unit:v[2],pack:v[3],price:v[4],kcal:v[5],p:v[6],c:v[7],f:v[8],allergens:v[9]}]));
const BUILTIN=[];
const STEPSETS={
  stir:['Prepare the vegetables and put the rice or noodles on to cook, if using.','Heat a splash of oil in a large frying pan. Cook the protein until golden and cooked through.','Add the vegetables, stir-fry until just tender, then toss with the sauce and seasonings.','Serve hot, dividing everything equally between plates.'],
  pasta:['Bring a pan of salted water to the boil and cook the pasta until tender. Save a mug of cooking water.','Heat a little oil in a pan. Cook the aromatics and main ingredients until softened and cooked through.','Add the sauce ingredients, simmer briefly, then toss with pasta and loosen with cooking water.','Taste, season and finish with any cheese or herbs.'],
  curry:['Prepare the vegetables and start cooking the rice if the recipe includes it.','Warm oil in a deep pan. Fry onion and aromatics for 3–4 minutes before adding spices.','Add the remaining ingredients and simmer gently until the protein and vegetables are cooked.','Season to taste and serve with the rice or grain.'],
  tray:['Preheat the oven to 200°C (180°C fan) and line a large baking tray.','Chop the vegetables, toss everything with oil and seasonings, and arrange in a single layer.','Roast for 20–30 minutes, turning once, until everything is browned and cooked through.','Serve with the prepared side or finish with sauce as listed.'],
  bowl:['Cook the grain or potatoes according to the packet instructions.','Cook the main protein in a non-stick pan with seasoning until done.','Slice the vegetables and stir together any dressing ingredients.','Build bowls with the grains, vegetables, protein and dressing.'],
  stew:['Heat a little oil in a heavy saucepan; soften the onion and other aromatics.','Stir in spices, pulses, vegetables and tomatoes or stock.','Simmer for 20–25 minutes until thick and tender, adding a little water as needed.','Adjust seasoning and serve warm with the suggested side.'],
  wrap:['Prepare the vegetables and warm the wraps or pitta if you like.','Cook and season the filling in a frying pan until cooked through.','Stir together the sauce or dressing ingredients.','Fill the wraps with the hot filling, crunchy vegetables and sauce; roll tightly.'],
  salad:['Prepare the grains or protein, if needed, and allow to cool slightly.','Chop all vegetables into bite-sized pieces.','Mix the dressing ingredients and toss with the salad and main ingredients.','Divide between plates; finish with the remaining toppings.'],
  oven:['Preheat the oven to 200°C (180°C fan). Prepare and season all ingredients.','Arrange the ingredients in a suitable oven dish, with sauce or stock if using.','Bake for 20–35 minutes, until bubbling and thoroughly cooked.','Rest briefly, garnish and serve.'],
  breakfast:['Prepare the vegetables and beat the eggs if using.','Heat a non-stick frying pan over medium heat and cook the filling ingredients.','Add the eggs or other base and cook until set and hot throughout.','Season and serve with the suggested sides.']
};
function add(title,emoji,minutes,diet,method,ing,tags='',note=''){
  let entries=ing.split(' ').filter(Boolean).map(x=>{let [k,v]=x.split(':');if(!ING[k])throw Error('Unknown ingredient '+k+' in '+title);return {id:k,qty:Number(v)};});
  const kcal=entries.reduce((s,x)=>s+ING[x.id].kcal*x.qty/(ING[x.id].unit==='each'?1:100),0)/2;
  const protein=entries.reduce((s,x)=>s+ING[x.id].p*x.qty/(ING[x.id].unit==='each'?1:100),0)/2;
  const carbs=entries.reduce((s,x)=>s+ING[x.id].c*x.qty/(ING[x.id].unit==='each'?1:100),0)/2;
  const fat=entries.reduce((s,x)=>s+ING[x.id].f*x.qty/(ING[x.id].unit==='each'?1:100),0)/2;
  const auto= [minutes<=25?'quick':'',protein>=32?'protein':'',carbs<35?'lowcarb':''].filter(Boolean);
  BUILTIN.push({id:'r'+(BUILTIN.length+1),title,emoji,minutes,diet,method,ingredients:entries,tags:[...new Set([...tags.split(',').filter(Boolean),...auto])],note,
    kcal:Math.round(kcal),protein:Math.round(protein),carbs:Math.round(carbs),fat:Math.round(fat),steps:STEPSETS[method]});
}
// Ingredients are for 2 people; supermarket unit prices and nutrition are indicative only.
add('Sticky honey soy chicken','🍗',25,'meat','stir','chicken:350 rice:150 broccoli:230 soy:35 honey:20 ginger:15 garlic:10 oil:10','family,asian','Glossy, sweet-savoury and better than a takeaway.');
add('Creamy tomato chicken pasta','🍝',30,'meat','pasta','chicken:320 pasta:180 passata:300 cream:100 spinach:80 garlic:10 parmesan:25 oil:10','comfort,family','A cosy weeknight classic.');
add('Spiced beef burrito bowls','🥙',30,'meat','bowl','beef:300 rice:150 blackbeans:150 pepper:150 tomato:130 lettuce:70 paprika:8 cumin:5 oil:10','family,mexican','All the burrito flavour, no wrapping required.');
add('Coconut chickpea curry','🥘',30,'vegan','curry','chickpeas:240 coconut:250 rice:140 spinach:110 onion:100 curry_powder:12 garlic:10 oil:10','budget,comfort','Rich and aromatic with pantry staples.');
add('Lemon salmon traybake','🐟',30,'fish','tray','salmon:260 potato:450 greenbeans:220 lemon:1 oil:15 garlic:10 oregano:4','healthy,mediterranean','One tray, almost no washing-up.');
add('Teriyaki tofu noodles','🍜',20,'vegan','stir','tofu:320 rice_noodles:150 broccoli:180 carrot:130 soy:35 ginger:15 sesame:10 garlic:10','asian,budget','Crispy tofu and glossy noodles.');
add('Turkey chilli con carne','🌶️',35,'meat','stew','turkey:350 kidney:240 tomatoes:400 onion:120 pepper:180 rice:130 cumin:8 paprika:8 oil:10','protein,family','Make once, enjoy a hearty bowl.');
add('Pesto chicken gnocchi','🍃',20,'meat','pasta','chicken:320 gnocchi:400 pesto:70 cherry:180 spinach:80 parmesan:20 oil:10','comfort','Pillowy gnocchi in herby pesto.');
add('Halloumi & sweet potato bowls','🥗',35,'vegetarian','bowl','halloumi:200 sweetpotato:420 chickpeas:120 spinach:90 yoghurt:100 lemon:1 paprika:6 oil:15','vegetarian,mediterranean','Sweet, salty and satisfying.');
add('Garlic prawn linguine','🍤',20,'fish','pasta','prawns:180 pasta:180 cherry:160 spinach:60 garlic:15 lemon:1 chilli:3 oil:20','mediterranean','A bright, speedy dinner.');
add('Beef & broccoli stir-fry','🥦',20,'meat','stir','beef:300 broccoli:260 rice:150 soy:35 ginger:20 garlic:12 honey:15 oil:10','asian','Takeaway-style flavour, made at home.');
add('Roasted veggie couscous','🫑',30,'vegan','tray','couscous:170 courgette:230 pepper:200 chickpeas:160 lemon:1 onion:120 paprika:6 oil:18','budget,mediterranean','Colourful vegetables and fluffy couscous.');
add('Chicken fajita wraps','🌯',25,'meat','wrap','chicken:330 tortilla:4 pepper:240 onion:170 yoghurt:110 paprika:10 cumin:6 lettuce:70 oil:10','family,mexican','Sizzling peppers in soft wraps.');
add('Mushroom spinach risotto','🍄',40,'vegetarian','stew','rice:175 mushroom:270 spinach:100 onion:100 stock:2 parmesan:35 garlic:10 oil:15','comfort','Creamy without needing much cream.');
add('Lentil bolognese','🍅',35,'vegan','pasta','lentils:150 pasta:180 tomatoes:400 carrot:130 onion:100 garlic:12 oregano:5 oil:12','budget,family','Hearty plant-based pasta sauce.');
add('Tuna & sweetcorn pasta','🐟',20,'fish','pasta','tuna:145 pasta:180 sweetcorn:130 passata:250 mozzarella:70 onion:80 oil:10','budget,family','A simple cupboard dinner.');
add('Chicken tikka rice bowls','🍛',30,'meat','curry','chicken:340 basmati:150 yoghurt:130 tomatoes:250 onion:100 curry_powder:12 paprika:6 garlic:10 oil:10','family,asian','Warming spices and cool yoghurt.');
add('Black bean quesadillas','🧀',20,'vegetarian','wrap','blackbeans:220 tortilla:4 cheddar:110 pepper:150 sweetcorn:120 tomato:140 cumin:5 oil:8','mexican,budget','Crispy cheesy pockets.');
add('Baked cod & tomato potatoes','🍋',35,'fish','tray','cod:250 potato:430 cherry:220 courgette:180 lemon:1 oregano:6 oil:18','mediterranean,healthy','Fresh, light and filling.');
add('Peanut tofu rice bowls','🥜',25,'vegan','bowl','tofu:330 rice:150 carrot:150 cucumber:170 peanut:45 soy:25 lime:1 ginger:10','asian','Creamy peanut dressing and crunch.');
add('Sausage & pepper traybake','🌭',35,'meat','tray','sausage:350 potato:470 pepper:230 onion:150 paprika:6 oil:15','family,comfort','A proper one-tray dinner.');
add('Spicy chicken rice noodles','🍜',25,'meat','stir','chicken:310 rice_noodles:150 pepper:170 carrot:120 soy:30 chilli:6 lime:1 sesame:10','asian','A little heat with bright lime.');
add('Feta & chickpea Greek bowls','🫒',15,'vegetarian','salad','feta:180 chickpeas:210 couscous:140 cucumber:200 cherry:200 lemon:1 oil:12 oregano:6','mediterranean,quick','A fresh picnic-style bowl.');
add('Sweet potato black bean chilli','🌶️',35,'vegan','stew','sweetpotato:380 blackbeans:240 tomatoes:400 pepper:170 onion:130 cumin:8 paprika:8 oil:10','budget,comfort','Smoky, warming and meat-free.');
add('Creamy mushroom pasta','🍝',25,'vegetarian','pasta','pasta:180 mushroom:270 cream:130 onion:90 spinach:90 garlic:10 parmesan:35 oil:10','comfort','Silky sauce and plenty of mushrooms.');
add('Ginger salmon rice bowl','🍣',25,'fish','bowl','salmon:260 rice:150 cucumber:180 avocado:1 soy:30 ginger:15 lime:1 sesame:8','asian,healthy','Flaky salmon with zingy dressing.');
add('Chicken & vegetable fried rice','🍚',20,'meat','stir','chicken:260 rice:150 egg:2 peas:150 carrot:100 spring:65 soy:30 oil:15','budget,family','Great for using up vegetables.');
add('Mediterranean chicken pittas','🥙',25,'meat','wrap','chicken:340 pita:4 yoghurt:140 cucumber:180 tomato:150 lemon:1 oregano:6 oil:12','mediterranean,family','Garlicky yoghurt and juicy chicken.');
add('Prawn coconut curry','🍤',25,'fish','curry','prawns:180 coconut:250 rice:150 pepper:170 spinach:100 curry:55 onion:100 oil:10','asian','Fragrant, creamy and quick.');
add('Cheesy broccoli baked potatoes','🥔',40,'vegetarian','oven','potato:550 broccoli:280 cheddar:115 milk:100 mustard:12','budget,comfort','Crisp skins with a gooey topping.');
add('Tuna avocado tortilla wraps','🥑',15,'fish','wrap','tuna:145 tortilla:4 avocado:1 lettuce:80 cucumber:150 yoghurt:110 lemon:1','quick,healthy','Fresh, filling and no oven needed.');
add('Tomato & red lentil soup','🍲',30,'vegan','stew','lentils:155 tomatoes:400 carrot:180 onion:130 garlic:12 stock:2 bread:4 oil:10','budget,comfort','Cosy bowls with toast.');
add('One-pot chicken orzo-style pasta','🍲',30,'meat','stew','chicken:320 pasta:180 spinach:100 tomatoes:350 onion:100 garlic:12 stock:2 parmesan:20 oil:10','family,comfort','All the flavour, fewer pans.');
add('Sesame beef noodle bowls','🍜',25,'meat','stir','beef:320 noodles:160 broccoli:180 pepper:160 soy:35 ginger:12 sesame:15 honey:10','asian','Saucy noodles with crispy beef edges.');
add('Vegetable coconut noodle soup','🥥',25,'vegan','curry','rice_noodles:145 coconut:290 mushroom:150 broccoli:170 carrot:130 curry:45 ginger:15 lime:1','asian,budget','Fragrant broth and soft noodles.');
add('Lemon herb chicken & couscous','🍋',30,'meat','bowl','chicken:350 couscous:160 courgette:230 cherry:160 lemon:1 garlic:10 oregano:8 oil:15','mediterranean,healthy','A bright and balanced weeknight plate.');
add('Turkey meatball tomato pasta','🍝',35,'meat','pasta','turkey:350 pasta:180 passata:400 onion:110 garlic:12 egg:1 parmesan:25 oregano:6 oil:10','family','Tender meatballs with red sauce.');
add('Chickpea & spinach shakshuka','🍳',25,'vegetarian','breakfast','egg:4 chickpeas:190 tomatoes:400 spinach:110 pepper:150 onion:110 paprika:8 pita:2 oil:12','budget,comfort','Eggs nestled in smoky tomatoes.');
add('Pesto mozzarella pasta bake','🧀',35,'vegetarian','oven','pasta:180 pesto:85 mozzarella:125 cherry:200 spinach:100 passata:200 oil:8','family,comfort','Golden, bubbly and herby.');
add('Spicy tofu lettuce cups','🌶️',20,'vegan','wrap','tofu:350 lettuce:130 carrot:160 cucumber:140 rice:130 soy:35 ginger:15 chilli:5 oil:10','asian,healthy','Crunchy lettuce with warm savoury tofu.');
add('Beef & kidney bean cottage pie','🥧',45,'meat','oven','beef:330 kidney:150 potato:500 carrot:150 peas:110 onion:100 stock:2 tomatoes:250 oil:10','family,comfort','Classic mash-topped comfort food.');
add('Garlic halloumi vegetable skewers','🍢',30,'vegetarian','tray','halloumi:200 pepper:240 courgette:220 cherry:200 couscous:150 lemon:1 oregano:6 oil:15','mediterranean','Colourful veg and salty golden cheese.');
add('Chicken & chickpea paprika stew','🥘',35,'meat','stew','thigh:380 chickpeas:220 tomatoes:400 spinach:100 onion:120 paprika:10 garlic:12 oil:10','protein,comfort','Smoky and rich with tender chicken.');
add('Creamy salmon spinach pasta','🐟',25,'fish','pasta','salmon:260 pasta:180 spinach:120 cream:120 lemon:1 garlic:10 parmesan:20','comfort','Tender salmon in a lemony sauce.');
add('Broccoli egg fried noodles','🥦',20,'vegetarian','stir','noodles:150 egg:3 broccoli:210 pepper:150 spring:70 soy:35 sesame:12 garlic:10','asian,budget','Speedy and full of crunch.');
add('Harissa-style chickpea traybake','🌶️',30,'vegan','tray','chickpeas:240 cauliflower:350 sweetpotato:300 paprika:12 cumin:7 lemon:1 oil:20','budget,healthy','Smoky roasted veg with crisp chickpeas.');
add('Turkey taco lettuce bowls','🌮',25,'meat','bowl','turkey:340 lettuce:130 tomato:180 pepper:150 blackbeans:170 avocado:1 cumin:8 paprika:8 oil:10','mexican,lowcarb','All the taco flavour, loads of crunch.');
add('Chicken & mushroom cream skillet','🍗',25,'meat','stir','chicken:350 mushroom:260 spinach:90 cream:140 garlic:14 potato:340 oil:10','protein,comfort','Tender chicken in a garlicky sauce.');
add('Cod & pea lemon rice','🍚',25,'fish','bowl','cod:250 rice:155 peas:170 lemon:1 garlic:10 spinach:80 oil:15','healthy','Fresh fish and fluffy lemon rice.');
add('Egg & avocado breakfast-for-dinner','🍳',15,'vegetarian','breakfast','egg:4 avocado:1 bread:4 cherry:180 spinach:80 oil:8','quick,healthy','Sometimes the simplest dinner wins.');
add('One-pot tomato chickpea gnocchi','🍅',25,'vegan','stew','gnocchi:400 chickpeas:170 passata:340 spinach:110 onion:100 garlic:10 oregano:5 oil:10','budget,comfort','Soft gnocchi in rich tomato sauce.');
add('Miso-style glazed tofu & rice','🍚',25,'vegan','stir','tofu:340 rice:155 broccoli:230 soy:35 garlic:10 ginger:15 sesame:12','asian','Sweet-savoury glazed tofu bites.');
add('Mediterranean tuna couscous','🥗',15,'fish','salad','tuna:145 couscous:165 cucumber:170 cherry:160 feta:80 lemon:1 oil:12','quick,mediterranean','Bright, light and protein-packed.');
add('Crispy chicken potato bowls','🥔',35,'meat','tray','chicken:340 potato:480 lettuce:80 tomato:180 yoghurt:130 paprika:8 garlic:12 oil:15','family','Crisp potatoes and cool yoghurt sauce.');
add('Lentil spinach dhal','🍛',35,'vegan','curry','lentils:170 coconut:200 basmati:130 spinach:130 onion:120 garlic:12 ginger:15 curry_powder:12 oil:10','budget,asian','Creamy, gently spiced comfort.');
add('Beef tomato gnocchi skillet','🍅',25,'meat','stew','beef:320 gnocchi:400 passata:350 spinach:90 onion:100 garlic:12 mozzarella:100 oil:10','family,comfort','Rich beef and tender pillowy gnocchi.');
add('Prawn & avocado rice salad','🥑',20,'fish','salad','prawns:180 rice:140 avocado:1 cucumber:160 tomato:170 lime:1 oil:10','healthy','Light but satisfying.');
add('Roasted cauliflower & lentil bowls','🥣',35,'vegan','tray','cauliflower:400 lentils:145 couscous:110 lemon:1 paprika:9 cumin:6 spinach:80 oil:15','budget,healthy','Roasty cauliflower with tangy lemon.');
add('Creamy turkey & pea pasta','🍝',25,'meat','pasta','turkey:340 pasta:180 peas:160 cream:120 onion:100 garlic:10 parmesan:20 oil:10','family,comfort','A crowd-pleaser for busy evenings.');
add('Black bean sweetcorn tacos','🌮',20,'vegan','wrap','blackbeans:240 tortilla:4 sweetcorn:160 pepper:170 lettuce:90 tomato:130 lime:1 cumin:8 oil:10','mexican,budget','Crunchy, smoky plant-based tacos.');
add('Honey mustard salmon & greens','🐟',30,'fish','tray','salmon:260 potato:400 greenbeans:220 honey:18 mustard:20 lemon:1 oil:12','healthy','Sweet mustard glaze with fresh greens.');
add('Roasted Mediterranean vegetable pasta','🍆',35,'vegan','tray','pasta:180 courgette:230 pepper:200 cherry:200 passata:260 garlic:12 oregano:7 oil:16','budget,mediterranean','Colourful roasted vegetables and pasta.');
add('Chicken peanut satay bowls','🥜',30,'meat','bowl','chicken:350 rice:150 broccoli:230 peanut:48 soy:25 coconut:120 lime:1 ginger:12','asian,protein','Creamy satay sauce and tender chicken.');


// Extended recipe collection, original combinations; quantities serve 2.
add("Creamy garlic chicken with broccoli","🍗",30,"meat","stir","chicken:340 broccoli:250 cream:120 garlic:15 potato:380 mustard:12 oil:12","family,protein","Garlicky skillet with tender greens.");
add("Lemon paprika chicken and rice","🍋",30,"meat","bowl","thigh:390 basmati:160 pepper:190 lemon:1 paprika:8 onion:100 garlic:10 oil:12","family","Zesty chicken with fluffy rice.");
add("Tomato basil-style chicken bake","🍅",35,"meat","oven","chicken:350 mozzarella:125 cherry:260 passata:250 garlic:12 oregano:8 potato:380 oil:12","mediterranean,family","Juicy chicken under bubbling mozzarella.");
add("Chicken and mushroom stroganoff-style rice","🍄",35,"meat","stew","chicken:340 mushroom:250 rice:150 cream:130 mustard:15 onion:110 paprika:7 oil:10","comfort","Creamy, savoury and deeply comforting.");
add("Chicken avocado grain bowls","🥑",25,"meat","bowl","chicken:340 quinoa:140 avocado:1 cherry:190 cucumber:160 yoghurt:100 lime:1 oil:10","healthy,protein","Fresh grains with creamy avocado.");
add("Smoky chicken and black bean tacos","🌮",25,"meat","wrap","chicken:300 tortilla:4 blackbeans:200 pepper:160 onion:110 tomato:120 cumin:8 paprika:7 lime:1","mexican,family","Soft tacos with a smoky filling.");
add("Golden chicken and cauliflower curry","🍛",35,"meat","curry","chicken:330 cauliflower:300 coconut:240 rice:140 curry_powder:12 onion:110 ginger:15 oil:10","asian","Golden spices, soft cauliflower and tender chicken.");
add("Chicken pesto and tomato wraps","🌯",20,"meat","wrap","chicken:310 tortilla:4 pesto:65 tomato:180 lettuce:90 mozzarella:100 lemon:1","quick,mediterranean","Warm wraps with fragrant pesto.");
add("Honey mustard chicken traybake","🍯",35,"meat","tray","thigh:410 potato:450 carrot:240 honey:25 mustard:20 lemon:1 oil:13","family,comfort","Sweet-tangy glaze with roast veg.");
add("Chicken spinach and feta pasta","🍝",30,"meat","pasta","chicken:340 pasta:180 spinach:140 feta:100 cherry:200 garlic:12 lemon:1 oil:12","mediterranean","Bright lemon and tangy feta.");
add("Crispy paprika chicken pittas","🥙",25,"meat","wrap","chicken:340 pita:4 lettuce:90 cucumber:150 tomato:150 yoghurt:150 paprika:9 garlic:12","family,quick","A filling pitta with cool yoghurt.");
add("Ginger sesame chicken and green beans","🍱",25,"meat","stir","chicken:350 rice:155 greenbeans:260 soy:30 ginger:18 sesame:12 honey:15 oil:8","asian,protein","Sticky chicken with crisp green beans.");
add("Chicken and sweetcorn potato chowder","🍲",35,"meat","stew","chicken:300 potato:360 sweetcorn:180 milk:250 stock:2 onion:130 carrot:150 oil:12","comfort,family","A creamy, chunky supper.");
add("Chicken courgette tomato gnocchi","🍅",25,"meat","stew","chicken:320 gnocchi:380 courgette:210 cherry:190 passata:240 oregano:5 garlic:12 oil:12","family","Soft gnocchi, juicy chicken, rich tomato.");
add("Chicken peanut rice-noodle salad","🥜",25,"meat","salad","chicken:310 rice_noodles:160 carrot:160 cucumber:150 peanut:40 soy:20 lime:1 ginger:10","asian","Crunchy noodles with a nutty dressing.");
add("Classic beef spaghetti bolognese","🍝",40,"meat","pasta","beef:360 pasta:190 passata:400 onion:120 carrot:140 garlic:15 oregano:6 oil:12","family,comfort","Slow-ish simmered tomato and beef sauce.");
add("Beef and sweet potato chilli bowls","🌶️",35,"meat","stew","beef:340 sweetpotato:330 kidney:210 tomatoes:400 onion:120 cumin:8 paprika:8 oil:10","family,protein","Hearty and gently smoky.");
add("Quick beef and pepper noodles","🍜",20,"meat","stir","beef:320 noodles:160 pepper:220 spring:70 soy:35 ginger:14 sesame:10 honey:12","quick,asian","Flash-fried beef and soft noodles.");
add("Cheesy beef and spinach pasta bake","🧀",40,"meat","oven","beef:330 pasta:180 passata:400 spinach:120 cheddar:110 onion:100 garlic:10 oregano:6","family,comfort","A bubbling favourite for cold evenings.");
add("Beef taco rice skillet","🌮",30,"meat","stew","beef:330 rice:150 kidney:160 tomato:180 pepper:200 sweetcorn:120 cumin:8 paprika:7","mexican","Big-flavour one-pan taco bowls.");
add("Herby beef meatballs and couscous","🥘",35,"meat","stew","beef:350 couscous:170 tomatoes:400 onion:110 garlic:12 egg:1 oregano:7 oil:12","mediterranean","Saucy meatballs over fluffy couscous.");
add("Turkey and mushroom lettuce wraps","🥬",20,"meat","wrap","turkey:350 mushroom:180 lettuce:130 carrot:140 soy:30 ginger:15 garlic:10 oil:12","quick,lowcarb","Light, crunchy and savoury.");
add("Turkey spinach rice bake","🍚",40,"meat","oven","turkey:350 rice:160 spinach:150 passata:340 mozzarella:100 onion:90 garlic:10 oil:10","family","Comforting rice baked with tomato and cheese.");
add("Turkey and black bean burritos","🌯",25,"meat","wrap","turkey:340 blackbeans:210 tortilla:4 pepper:180 tomato:150 cumin:7 paprika:7 yoghurt:100","mexican,protein","Protein-packed warm wraps.");
add("Turkey keema-style curry","🍛",30,"meat","curry","turkey:350 basmati:150 peas:180 tomatoes:350 onion:110 garlic:12 ginger:12 curry_powder:12 oil:10","asian","Spiced mince with peas and rice.");
add("Turkey burgers with oven wedges","🍔",35,"meat","tray","turkey:360 potato:480 lettuce:100 tomato:180 onion:100 bread:4 yoghurt:110 mustard:12 oil:14","family","Juicy burger patties and crisp wedges.");
add("Beef and broccoli sesame bowls","🥦",25,"meat","bowl","beef:340 broccoli:270 rice:150 soy:30 honey:15 sesame:14 ginger:12 garlic:10","asian","Tender beef with sesame and broccoli.");
add("Chilli beef stuffed sweet potatoes","🍠",35,"meat","oven","beef:330 sweetpotato:460 blackbeans:180 passata:230 cumin:8 cheddar:65 onion:100 oil:12","family","Soft baked potatoes with spicy filling.");
add("Turkey pesto courgette pasta","🍃",25,"meat","pasta","turkey:340 pasta:180 courgette:220 pesto:70 cherry:180 parmesan:30 garlic:10","quick,family","Fresh green pasta with lean turkey.");
add("Sausage and chickpea tomato stew","🥘",35,"meat","stew","sausage:350 chickpeas:220 tomatoes:400 spinach:130 onion:120 carrot:160 garlic:12 paprika:6","comfort","Rustic sausage and pulse stew.");
add("Herby salmon quinoa and green beans","🐟",30,"fish","bowl","salmon:260 quinoa:155 greenbeans:250 lemon:1 yoghurt:90 oregano:6 oil:15","healthy","Flaky fish with fresh herbs.");
add("Creamy dill-style cod and potatoes","🐟",30,"fish","stew","cod:260 potato:430 spinach:150 cream:115 mustard:14 lemon:1 garlic:12 oil:10","comfort","Tender white fish in a silky lemon sauce.");
add("Spicy prawn tomato rice","🍤",25,"fish","stew","prawns:200 rice:150 tomatoes:380 pepper:200 onion:120 garlic:15 chilli:5 oil:12","quick","Juicy prawns in spicy tomato rice.");
add("Prawn and avocado lime bowls","🍋",20,"fish","salad","prawns:200 rice:140 cucumber:200 avocado:1 tomato:170 lime:1 spring:55 oil:12","healthy","Fresh lime with cool vegetables.");
add("Salmon and broccoli noodle bowls","🍜",25,"fish","stir","salmon:260 rice_noodles:160 broccoli:250 soy:30 ginger:18 sesame:12 lime:1","asian","Glazed salmon and noodles.");
add("Mediterranean cod with chickpeas","🫒",30,"fish","tray","cod:260 chickpeas:220 cherry:240 pepper:210 spinach:100 lemon:1 garlic:12 oil:18","mediterranean","Light fish over garlicky chickpeas.");
add("Garlic lemon prawns and couscous","🍤",20,"fish","bowl","prawns:200 couscous:170 courgette:210 cherry:190 garlic:18 lemon:1 oil:20","quick,mediterranean","Bright lemon-garlic prawns.");
add("Tomato tuna quinoa salad","🥗",15,"fish","salad","tuna:145 quinoa:150 tomato:220 cucumber:180 chickpeas:160 lemon:1 oil:12","quick,healthy","A cupboard-friendly light supper.");
add("Mustard salmon and sweet potato tray","🍠",35,"fish","tray","salmon:260 sweetpotato:420 greenbeans:230 mustard:18 honey:20 lemon:1 oil:12","healthy","Golden veg and tangy salmon.");
add("Prawn peanut rice noodles","🍜",25,"fish","stir","prawns:200 rice_noodles:160 broccoli:170 carrot:140 peanut:40 soy:30 lime:1 ginger:12","asian","Fast creamy peanut noodles.");
add("Cod tomato and bean stew","🍅",30,"fish","stew","cod:260 kidney:200 tomatoes:400 spinach:110 onion:120 garlic:12 paprika:7 oil:12","mediterranean","A hearty, tomato-rich fish supper.");
add("Tuna and roasted pepper pittas","🥙",15,"fish","wrap","tuna:145 pita:4 pepper:170 yoghurt:130 cucumber:140 lettuce:70 lemon:1","quick","A fast, creamy pitta filling.");
add("Salmon pesto pasta with peas","🍝",25,"fish","pasta","salmon:260 pasta:180 peas:170 pesto:60 lemon:1 spinach:100","family","Creamy pesto texture with flaky salmon.");
add("Lemon prawn quinoa salads","🥗",20,"fish","salad","prawns:200 quinoa:145 cucumber:180 cherry:210 spinach:80 lemon:1 oil:15","healthy","Vibrant seafood and grain bowls.");
add("Ginger soy cod rice bowls","🍚",25,"fish","bowl","cod:260 rice:160 broccoli:220 carrot:140 soy:30 ginger:18 honey:12 sesame:10","asian","Delicate white fish with warming ginger.");
add("Spinach and feta baked eggs","🍳",25,"vegetarian","breakfast","egg:4 spinach:170 feta:100 cherry:220 bread:4 onion:100 oil:12","quick","Baked-style breakfast for dinner.");
add("Creamy tomato gnocchi with mozzarella","🧀",25,"vegetarian","stew","gnocchi:430 passata:350 mozzarella:125 spinach:140 onion:100 garlic:15 oregano:7 oil:10","family","Pillowy gnocchi in a bubbling sauce.");
add("Garlic mushroom halloumi rice","🍄",25,"vegetarian","stir","halloumi:200 mushroom:260 rice:155 spinach:100 garlic:15 lemon:1 oil:15","quick","Crispy cheese and savoury mushrooms.");
add("Mediterranean feta couscous salad","🥗",20,"vegetarian","salad","couscous:170 feta:150 cherry:200 cucumber:170 pepper:150 lemon:1 oregano:6 oil:14","mediterranean","Fresh, salty, and crunchy.");
add("Broccoli cheese and potato frittata","🥚",35,"vegetarian","breakfast","egg:5 potato:300 broccoli:210 cheddar:100 onion:90 milk:80 oil:10","family","A thick, comforting skillet frittata.");
add("Halloumi and sweetcorn quesadillas","🌮",20,"vegetarian","wrap","halloumi:190 tortilla:4 sweetcorn:160 blackbeans:170 pepper:150 tomato:140 lime:1","quick,mexican","Crispy cheese-filled tortillas.");
add("Creamy spinach and pea risotto","🍚",40,"vegetarian","stew","rice:180 peas:180 spinach:130 parmesan:40 onion:120 stock:2 garlic:12 oil:16","comfort","Creamy with bright green vegetables.");
add("Mushroom feta stuffed peppers","🫑",40,"vegetarian","oven","pepper:400 mushroom:240 couscous:160 feta:120 spinach:80 cherry:150 oil:13","mediterranean","Colourful roasted pepper halves.");
add("Tomato mozzarella gnocchi traybake","🍅",35,"vegetarian","tray","gnocchi:450 mozzarella:125 cherry:260 courgette:220 pesto:50 spinach:80 oil:12","family","Crispy edges and molten mozzarella.");
add("Halloumi shawarma-style grain bowls","🥙",30,"vegetarian","bowl","halloumi:220 quinoa:145 carrot:170 cucumber:180 yoghurt:120 lemon:1 cumin:7 paprika:7","mediterranean","Spiced grains and golden halloumi.");
add("Mushroom garlic noodles with egg","🍜",20,"vegetarian","stir","mushroom:260 noodles:165 egg:3 spring:70 garlic:14 soy:30 sesame:12 spinach:100","asian,quick","Slippery, savoury noodles.");
add("Baked feta and cherry tomato pasta","🍝",35,"vegetarian","oven","feta:180 cherry:310 pasta:180 spinach:110 garlic:18 oregano:6 oil:15","mediterranean","Oven-warmed tomatoes with creamy feta.");
add("Cheddar broccoli rice casserole","🧀",40,"vegetarian","oven","rice:180 broccoli:300 cheddar:135 milk:200 mustard:12 onion:100 peas:120","family,comfort","Creamy vegetable bake.");
add("Chickpea halloumi tomato skillet","🍅",25,"vegetarian","stew","chickpeas:220 halloumi:200 tomatoes:400 spinach:120 onion:100 paprika:8 oil:12","protein","A rich one-pan supper.");
add("Pesto mushroom toasted pittas","🍄",20,"vegetarian","wrap","pita:4 mushroom:240 mozzarella:125 pesto:75 tomato:170 spinach:100","quick","Warm herby pitta pockets.");
add("Creamy lentil and coconut curry","🍛",35,"vegan","curry","lentils:175 coconut:240 basmati:150 tomatoes:300 onion:130 garlic:14 ginger:15 curry_powder:14 oil:10","budget,asian","Rich curry with tender lentils.");
add("Crispy sesame tofu and broccoli","🥦",25,"vegan","stir","tofu:360 broccoli:270 rice:150 soy:35 sesame:15 ginger:16 garlic:12","asian","Golden tofu with sesame sauce.");
add("Black bean avocado burrito bowls","🥑",20,"vegan","bowl","blackbeans:230 rice:155 avocado:1 pepper:180 tomato:200 lettuce:100 lime:1 cumin:8","mexican,quick","Colourful bowls with creamy avocado.");
add("Chickpea cauliflower tikka-style curry","🍛",35,"vegan","curry","chickpeas:230 cauliflower:300 coconut:230 rice:140 tomatoes:280 curry_powder:15 onion:110 oil:12","asian,budget","Warming spiced cauliflower.");
add("Roast carrot red lentil soup","🥕",35,"vegan","stew","carrot:400 lentils:180 onion:140 stock:2 garlic:12 cumin:8 bread:4 oil:14","budget,comfort","Velvety and gently spiced.");
add("Smoky black bean sweet potato wraps","🌯",30,"vegan","wrap","blackbeans:240 sweetpotato:340 tortilla:4 pepper:170 lettuce:100 cumin:8 paprika:8 lime:1","mexican,budget","Hearty smoky fillings.");
add("Coconut tofu and green bean curry","🥥",30,"vegan","curry","tofu:340 greenbeans:250 coconut:260 rice:145 curry:50 garlic:12 ginger:15 onion:100","asian","Creamy coconut sauce and crisp vegetables.");
add("Roasted vegetable quinoa and lemon","🥗",30,"vegan","tray","quinoa:170 courgette:240 pepper:220 chickpeas:200 cherry:170 lemon:1 oil:17","mediterranean,healthy","Fresh lemon and savoury roasted vegetables.");
add("Spicy tomato lentil pasta","🍝",30,"vegan","pasta","pasta:180 lentils:145 passata:380 spinach:130 onion:100 garlic:14 chilli:5 oil:12","budget","Spicy, hearty tomato sauce.");
add("Ginger garlic mushroom rice bowls","🍄",20,"vegan","stir","mushroom:280 rice:165 broccoli:230 soy:35 ginger:20 garlic:15 sesame:12","asian,quick","Deep umami in a speedy bowl.");
add("Lemony chickpea couscous pittas","🥙",20,"vegan","wrap","chickpeas:220 couscous:140 pita:4 tomato:160 cucumber:160 lemon:1 paprika:7 oil:12","quick,mediterranean","Sunny lemony chickpea pockets.");
add("Peanut vegetable stir-fry noodles","🥜",25,"vegan","stir","rice_noodles:170 peanut:45 broccoli:190 pepper:200 carrot:150 soy:30 ginger:12 lime:1","asian","Glossy nutty noodle supper.");
add("Turmeric-style cauliflower and chickpea rice","🍚",35,"vegan","bowl","cauliflower:350 chickpeas:230 rice:150 curry_powder:10 spinach:120 lemon:1 onion:100 oil:12","budget","Golden spiced cauliflower.");
add("Tomato courgette chickpea gnocchi","🍅",25,"vegan","stew","gnocchi:420 chickpeas:200 courgette:240 passata:330 garlic:12 oregano:7 oil:12","budget,comfort","Pillowy tomato-coated gnocchi.");
add("Sweet chilli tofu lettuce bowls","🥬",25,"vegan","bowl","tofu:350 rice:150 lettuce:110 carrot:140 cucumber:130 soy:28 chilli:4 lime:1","asian","Crispy tofu and tangy crunchy salad.");
add("Prawn spinach and feta orzo-style pasta","🍤",25,"fish","pasta","prawns:200 pasta:170 feta:90 spinach:120 cherry:180 garlic:12 lemon:1 oil:12","mediterranean","Juicy prawns and lemony feta.");
add("Turkey broccoli and mustard skillet","🥦",25,"meat","stir","turkey:340 broccoli:250 mushroom:170 cream:100 mustard:15 potato:350 oil:10","protein","A warming quick skillet.");
add("Halloumi and roasted veggie bowls","🥗",25,"vegetarian","bowl","halloumi:200 couscous:165 carrot:200 pepper:170 spinach:90 yoghurt:110 lemon:1","mediterranean","Sweet roast-style veg with salty cheese.");
add("Vegan black bean paprika stuffed peppers","🫑",40,"vegan","oven","pepper:410 blackbeans:220 rice:145 sweetcorn:130 tomatoes:240 cumin:8 paprika:8 oil:10","mexican,budget","Stuffed peppers with a rice filling.");
add("Tuna and spinach potato cakes","🐟",30,"fish","stew","tuna:145 potato:430 egg:2 spinach:110 spring:70 yoghurt:110 lemon:1 oil:12","family","Tender cakes with a lemony dip.");
add("Chicken lemon pea risotto","🍋",35,"meat","stew","chicken:320 rice:170 peas:190 stock:2 lemon:1 parmesan:35 onion:100 oil:12","comfort","Creamy, zesty one-pot rice.");
add("Prawn and courgette coconut noodles","🍜",25,"fish","curry","prawns:200 rice_noodles:160 courgette:230 coconut:220 spinach:100 curry:45 ginger:15 lime:1","asian","Creamy coconut noodles.");
add("Spinach feta and tomato omelettes","🍳",15,"vegetarian","breakfast","egg:5 feta:110 spinach:110 tomato:170 bread:4 oil:10","quick","A protein-rich speedy dinner.");
add("Crispy tofu taco salad","🌮",25,"vegan","salad","tofu:350 blackbeans:180 lettuce:140 cherry:190 sweetcorn:140 lime:1 paprika:8 tortilla:2 oil:12","mexican","Crunchy salad and smoky tofu.");
add("Chicken broccoli parmesan pasta","🍝",25,"meat","pasta","chicken:340 pasta:185 broccoli:240 cream:95 parmesan:45 garlic:12 lemon:1","family","Creamy pasta with plenty of greens.");
add("Salmon sweetcorn and potato chowder","🍲",35,"fish","stew","salmon:250 potato:400 sweetcorn:150 milk:250 onion:100 peas:140 stock:1 oil:10","comfort","Rich, warming fish chowder.");
add("Mushroom broccoli quinoa skillet","🍄",25,"vegan","stir","mushroom:250 quinoa:170 broccoli:240 pepper:170 soy:30 garlic:15 sesame:12","healthy","Savoury grains and green vegetables.");
add("Turkey tomato mozzarella meatballs","🍅",35,"meat","oven","turkey:350 passata:350 mozzarella:125 egg:1 onion:110 garlic:14 potato:380 oregano:7","family","Bubbling tomato-topped meatballs.");
add("Roasted sweet potato egg bowls","🍳",30,"vegetarian","bowl","sweetpotato:440 egg:4 spinach:120 avocado:1 yoghurt:120 paprika:7 oil:12","healthy","Roast veg and golden eggs.");
add("Spicy garlic prawn fried rice","🍤",20,"fish","stir","prawns:200 rice:165 peas:140 egg:2 spring:70 soy:30 garlic:16 chilli:5 oil:12","asian,quick","A bright, chilli-garlic supper.");
add("Veggie lentil cottage pie","🥧",45,"vegan","oven","lentils:190 potato:520 carrot:170 peas:170 mushroom:200 onion:120 stock:2 tomatoes:220 oil:12","budget,comfort","A cosy plant-based classic.");
add("Beef fajita potato bowls","🥔",30,"meat","bowl","beef:340 potato:440 pepper:240 onion:140 yoghurt:110 paprika:8 cumin:8 tomato:150","mexican","All the sizzle with crispy potatoes.");
add("Cheesy mushroom courgette gnocchi","🧀",25,"vegetarian","stew","gnocchi:420 mushroom:230 courgette:210 cheddar:100 spinach:120 cream:100 garlic:12","comfort","Creamy and deeply satisfying.");
add("Salmon lemon couscous bowls","🍋",25,"fish","bowl","salmon:260 couscous:165 cucumber:160 cherry:200 yoghurt:100 lemon:1 oregano:7 oil:12","mediterranean","Flaky salmon over fresh couscous.");
add("Coconut lentil sweet potato dhal","🍛",35,"vegan","curry","lentils:175 sweetpotato:340 coconut:240 tomatoes:260 spinach:110 onion:100 curry_powder:13 oil:10","budget,asian","Silky dhal with orange sweet potato.");
