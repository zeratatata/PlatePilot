# PlatePilot v6 — Theme-aware logo + Flexible days + Tonight + M&S offers

An original personal-use meal planner for iPhone and desktop, with 158 recipes, minimal illustrative food art, a fork-and-flight-path “P” logo with separate coral-on-cream (light) and ivory-on-aubergine (dark) palettes, dark mode, and local device storage. Not affiliated with Whipp, Ocado or M&S.

## What changed in v5

- **New theme-aware logo:** the exact selected P / fork / flight-path silhouette is traced into two clean vector assets. Light mode uses coral on cream; dark mode uses warm ivory on deep plum. The header changes instantly when the app theme toggle changes. Dark mode is still the default. The installation icon uses the current theme where the browser supports it; an already-installed iPhone Home Screen icon normally stays unchanged until the shortcut is removed and re-added. App theme switching cannot dynamically update an existing iPhone icon.
- The pricing integration, saved plans, 1–28-day planner, Tonight finder and local storage format remain **unchanged** from v5.
- **Flexible plans:** the four-step questionnaire now lets you select **1–28 consecutive dinners**, not always seven. Household size, dietary restrictions, food preferences, lifestyle priorities and dinner budget are still included. Each plan begins on the selected week's start day. For plans longer than seven days, neighbouring week views may overlap; avoid regenerating overlapping weeks unless you intend to replace them.
- **Tonight:** a separate bottom tab for a spontaneous single dinner. Filter **anything / meat / fish / veggie / vegan**, maximum cooking time, and optional **high-protein / healthy / budget-friendly / family-friendly** preferences. Choose one recipe and open its **one-meal shopping list**. Existing saved allergens, avoid-list and available appliances still apply. New users can go straight to Tonight without generating a longer plan first.
- **M&S offers:** the optional live Ocado data connector now reads current `wasPrice` and qualified single-product `multibuy` information, where the source returns it. The basket includes validated price reductions and same-product multibuy savings if required pack quantities are met. Sale prices are **not** generated if there are no confirmed source results. Other items stay labelled estimates. Offers may have checkout conditions or expiry dates; check actual retailer checkout totals.
- Preserves your custom recipes, shopping lists, favourites, dark/light toggle, pantry, cook mode and export/import.

## Simple update — no live price connection

1. **Export a backup** from your current PlatePilot Settings before changing anything.
2. Extract the ZIP. Open the `platepilot` folder.
3. Drag the **`public` folder** to the manual deploy area in your **existing** Netlify site's **Deploys** page. Upload the *folder*, not the app's `index.html` alone.
4. Open the **same Netlify URL** on iPhone Safari. Refresh; if it remains stale, close/reopen the app or remove/re-add its Home Screen shortcut (keep the site address the same). Data saved on that site address should normally remain; the exported backup is protection if Safari cleared local data.

This **static-only** upload supports everything except the online M&S price-fetching function. It will show estimated prices when no online feed is connected.

## Full version with real M&S/Ocado prices and sales

A manual static upload does **not** publish Netlify Functions. To use live price refresh:

1. Create an Apify account and review the terms/pricing of the third-party `zaiq/ocado-scraper` actor: https://apify.com/zaiq/ocado-scraper. It has *usage-based* costs; PlatePilot itself has no subscription. This feed uses M&S products listed on **Ocado**, not live M&S Foodhall in-store shelf prices, local stock or M&S till prices.
2. Put the **contents of the `platepilot/` folder** in a Git repository. Its root must include `netlify.toml`, `public/` and `netlify/functions/`.
3. Connect that repository to your **existing Netlify site** through its deployment settings (recommended), rather than starting a second site at a different URL. Netlify will publish `public/` and the function at `/.netlify/functions/prices`.
4. Add the following **secret environment variables** in the Netlify site settings (Functions runtime scope): `APIFY_TOKEN` = your Apify API token; `PRICE_REFRESH_CODE` = a long private passcode of your choosing (16+ unpredictable characters). Redeploy. **Never put either token in the public JavaScript, HTML, backup or Git history.**
5. In PlatePilot choose a plan or a Tonight recipe. In **Shopping**, choose `My plan` or `Tonight’s meal`, press **Refresh prices**, enter your private refresh passcode, and allow the provider search to finish. Refreshes may consume paid Apify credits. The app attempts to refresh expired prices when you revisit Shopping while the private code is still available in your session.

Only matched M&S Food on Ocado products, reasonable pack-size matches, and offers actually returned by the provider are used. Prices are checked at most for 32 distinct ingredients per manual refresh. Price matches expire after 24 hours and revert to labelled estimates when stale, unless you refresh them. Price-cut values (`wasPrice`) and qualifying multibuys are considered; `Buy 2 for £X` is counted for identical products only when at least two packs are required. Offers that involve *mixing different products*, personal discounts or promo codes are **not automatically calculated**. If the provider returns nothing or is unconfigured, it does **not** pretend to have real data. Information can vary at checkout.

### Limitations

- **No free guaranteed live-price service:** connecting the Apify provider requires your own account and may incur costs. A real end-to-end pricing request cannot be tested without valid provider credentials.
- **Only Ocado online M&S product listings:** Foodhall shelf prices, current M&S shop markdowns and local availability cannot be verified through this connector.
- The meal matching, dietary tags, ingredient costs and nutritional estimates are approximate. Allergy filtering is ingredient-based, not a guarantee against cross-contamination; check packaging.
- Local browser storage is device/browser-specific. Export a backup before switching browsers, clearing data or changing website addresses.
- Images are 12 shared illustrative dish artworks; they are not exact dish photographs.

## Files

```text
platepilot/
  netlify.toml                    Website and Functions configuration
  netlify/functions/prices.js     Server-side optional Ocado prices and offers
  public/index.html              App entry point
  public/app.js                  App data, plans, Tonight, shopping and UI
  public/recipes.js              158 recipes
  public/styles.css              Mobile and desktop, dark/light design
  public/sw.js                   Offline PWA cache v5
  public/manifest.webmanifest    Home Screen metadata
  public/assets/pp-logo-light.svg  Coral logo for light theme
  public/assets/pp-logo-dark.svg   Ivory logo for dark theme
  public/assets/pp-logo.svg        Coral compatibility logo
  public/assets/icon-192.png         Default dark app icon
  public/assets/icon-512.png         Default large dark app icon
  public/assets/icon-light-*.png     Light-theme app icons
  public/assets/icon-dark-*.png      Dark-theme app icons
  public/manifest-light.webmanifest  Light install manifest
  public/assets/recipes/*       12 flat illustrations
```

For local static tests, serve `public/` with any basic web server. The optional pricing function must be tested through Netlify with your own credentials.

## Updating the existing iPhone icon

Safari may keep a previously installed Home Screen icon even after a site deployment. After exporting a backup and confirming your data is still on the website, you can remove the **Home Screen shortcut only**, open the same Netlify site URL in Safari, select your preferred theme, and use **Share → Add to Home Screen** again. Avoid deleting browser/site data; that can remove locally saved plans.

The theme toggle changes the logo in the website and the browser favicon immediately. iOS controls whether an already-installed Home Screen icon updates; no web app can guarantee it changes in real time when you toggle the theme.
