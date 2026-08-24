# ryancurran.com

Personal site — landing + apps page for BuildWatch, Crumb, and Timefold.

## Stack

- [Astro 4](https://astro.build) (static)
- [Tailwind CSS](https://tailwindcss.com)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via fontsource (no Google Fonts)
- Hosted on [Netlify](https://www.netlify.com)
- DNS in **AWS Route 53**

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve dist/ locally
```

## Workflow

```bash
git checkout -b some-change
# edit
git push origin some-change
# Netlify posts a preview URL — eyeball it, then merge to main
```

`main` deploys automatically.

## Adding / editing an app

All apps live in `src/data/apps.ts` — name, tagline, description, icon path, links, and the full privacy policy as HTML. Edit there and the apps page picks it up at build.

Icons live in `/public` (1024×1024 PNGs from each app's Xcode asset catalog, plus Crumb's source PNG).

## Deployment

| Thing       | Where                                   |
|-------------|------------------------------------------|
| Hosting     | Netlify                                  |
| Domain      | `ryancurran.com` — DNS in **AWS Route 53** |
| Auto-deploy | Every merge to `main`                    |
| GitHub      | `rcurranmoz/ryancurran.com`              |

### First-time Netlify wiring

After pushing the repo to GitHub:

```bash
# from project root
npx netlify-cli login
npx netlify-cli init        # connect this repo to a new Netlify site
# build command:   npm run build
# publish dir:     dist
```

Then in the Netlify dashboard → Domain settings → add `ryancurran.com`, and copy the
verification CNAME / A records into Route 53.
