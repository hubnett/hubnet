# HubNet Website - GitHub Pages Deployment Guide

## Deployment Status: ✅ Active

Your HubNet website is now configured for automatic deployment on GitHub Pages with GitHub Actions.

### Key Configuration Files Created:

#### 1. `.github/workflows/deploy.yml`
- **Purpose**: Automatic deployment workflow triggered on push to main branch
- **Workflow**:
  - Triggers on: `push` to `main` branch and `pull_request` for testing
  - Installs Node.js 18
  - Installs dependencies with `npm ci`
  - Builds project with `npm run build`
  - Deploys `dist/` folder to GitHub Pages via GitHub Actions

#### 2. `public/CNAME`
- **Purpose**: Custom domain configuration for GitHub Pages
- **Content**: `hubnett.com`
- **Note**: This file tells GitHub Pages to serve your site at your custom domain

#### 3. `vite.config.ts` Updates
- **base**: Set to `/` (root path for your domain)
- **build.outDir**: Set to `dist` (GitHub Pages deployment directory)
- **build.sourcemap**: Set to `false` (smaller production builds)

### How It Works:

1. **You push code to GitHub**:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

2. **GitHub Actions automatically triggers**:
   - Builds your project: `npm run build`
   - Generates static files in `dist/` folder
   - Deploys to GitHub Pages

3. **Your site goes live** at:
   - **Domain**: https://hubnett.com/ (your custom domain)
   - **GitHub Pages fallback**: https://hubnett.github.io/ (if domain isn't configured)

### Making Future Updates:

Every time you push to the `main` branch, the website automatically updates. Just follow this workflow:

```bash
# Make your changes in the code
git add .
git commit -m "Update description of changes"
git push origin main
```

**That's it!** The workflow automatically builds and deploys your changes.

### Monitor Deployment:

1. Go to your GitHub repository: https://github.com/hubnett/hubnet
2. Click on **"Actions"** tab
3. See the deployment status and logs
4. Green checkmark = Successful deployment
5. Red X = Build failed (check logs for errors)

### Current Deployment Settings:

- **Repository**: https://github.com/hubnett/hubnet
- **Deployment Trigger**: Push to `main` branch
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Custom Domain**: hubnett.com
- **GitHub Pages Source**: GitHub Actions

### Troubleshooting:

If deployment fails:
1. Check the Actions tab on GitHub for error logs
2. Verify `npm run build` works locally: `npm run build`
3. Ensure no build errors in console output
4. Check that all dependencies are listed in `package.json`

### DNS Configuration (Already Done):

Your domain `hubnett.com` is already connected to GitHub Pages. The `CNAME` file in the `public/` directory tells GitHub Pages to serve your site at this domain.

---

**Questions?** Check the GitHub Actions workflow file at `.github/workflows/deploy.yml`
