# Deployment Guide

This guide will help you deploy your resume website to Netlify with automatic GitHub Actions deployment.

## Prerequisites

- GitHub account
- Netlify account (free tier)
- Git installed locally

## Step 1: Push to GitHub

If you haven't already pushed your code to GitHub:

```bash
git add .
git commit -m "Initial commit: Resume website"
git push origin main
```

## Step 2: Create Netlify Site

1. Go to [Netlify](https://www.netlify.com/) and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy manually" (we'll use GitHub Actions for CI/CD)
4. Note your site name (e.g., `your-site-name.netlify.app`)

## Step 3: Get Netlify Credentials

### Get Personal Access Token:
1. Go to Netlify → User Settings → Applications
2. Click "New access token"
3. Give it a name (e.g., "GitHub Actions")
4. Copy the token (save it securely - you won't see it again)

### Get Site ID:
1. Go to your site in Netlify
2. Navigate to Site Settings → General
3. Find "Site information" section
4. Copy the "Site ID" (or "API ID")

## Step 4: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add these two secrets:

   **Secret 1:**
   - Name: `NETLIFY_AUTH_TOKEN`
   - Value: Your Netlify personal access token

   **Secret 2:**
   - Name: `NETLIFY_SITE_ID`
   - Value: Your Netlify site ID

## Step 5: Test Deployment

1. Make a small change to any file (e.g., update README.md)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push origin main
   ```
3. Go to GitHub → Actions tab
4. Watch the deployment workflow run
5. Once complete, visit your Netlify site URL

## Step 6: Update README Badge

Update the Netlify badge in your README.md:

1. Go to Netlify → Site Settings → Status badges
2. Copy the badge markdown
3. Replace the placeholder in README.md

## Step 7: Custom Domain (Optional)

To use a custom domain:

1. Go to Netlify → Domain settings
2. Click "Add custom domain"
3. Follow the instructions to configure DNS
4. Update the `site` field in `astro.config.mjs`

## Updating Your Resume

Whenever you want to update your resume:

1. Edit `src/data/resume.json` for text content
2. Replace `public/Resume-Arumugam-Panchatcharam.pdf` with your latest PDF
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update resume"
   git push origin main
   ```
4. GitHub Actions will automatically deploy the changes

## Troubleshooting

### Build Fails
- Check GitHub Actions logs for errors
- Ensure all dependencies are in `package.json`
- Test locally with `npm run build`

### Site Not Updating
- Verify GitHub secrets are set correctly
- Check Netlify deploy logs
- Clear browser cache

### Styling Issues
- Run `npm run dev` locally to test
- Check browser console for errors
- Verify Tailwind CSS classes are correct

## Monitoring

- **GitHub Actions**: Monitor deployment status at `github.com/[username]/Resume/actions`
- **Netlify Dashboard**: View deploy logs and site analytics
- **Build Time**: Typical build takes 30-60 seconds

## Support

If you encounter issues:

1. Check the [Astro documentation](https://docs.astro.build)
2. Review [Netlify documentation](https://docs.netlify.com)
3. Check GitHub Actions logs for specific errors

---

Your resume website is now live and will automatically update whenever you push changes to the main branch!
