## GETTING STARTED

```bash
git clone --depth 1 git@github.com:tx-scraper/next-tx-single-language.git folder-name
```

Follow these steps after cloned:

- Remove `.git` folder
- Edit `.gitignore`, remove `.env` line
- Copy `.env.example` to `.env`
- Adjust value of `.env`
- Remove `content/.gitignore` file
- Copy `*.md` to `content` folder

---

## DEPLOY

### NETLIFY

- Import from github
- Build settings:
    - Base directory: `blank`
    - Build command: `yarn build`
    - Publish directory: `out`
- Environments variables
    - SITE_URL: `https://***.netlify.app`
    - NETLIFY_NEXT_PLUGIN_SKIP: `true`
- After deployed, go to https://app.netlify.com/sites/[SITE_NAME]/settings/domain
- Match the url according to env `SITE_URL`. If the subdomain not available, then you need to redeploy with new env.

## SITEMAP

Ping sitemap using `https://www.google.com/ping?sitemap=https://[SITE_URL]/sitemap.xml`