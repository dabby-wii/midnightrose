# KTV Promo Site (Starter)

## 1) Run locally

This is a static site. To avoid browser CORS issues with `fetch`, run a local server:

```bash
cd ktv-promo-site
npx serve .
```

Then open the shown localhost URL in your browser.

## 2) Update profiles (daily maintenance)

1. Put new images into `assets/images/`
2. Update `data/girls.json`:
   - `name`: card display name
   - `image`: image path
   - `link`: click-through URL
   - `visible`: show/hide card
3. Refresh browser

## 3) Connect to GitHub repo

```bash
git init
git add .
git commit -m "feat: initialize ktv promo site starter"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 4) Suggested next improvements

- Add real contact links (Zalo/WhatsApp/Telegram)
- Add language switch (ZH / VI)
- Add simple analytics (Google Analytics or Plausible)
- Add deploy workflow (Netlify/Vercel)
