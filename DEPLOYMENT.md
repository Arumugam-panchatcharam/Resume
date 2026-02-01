# Deployment Guide

This guide will help you deploy your resume website to Netlify with automatic deployment.

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

## Step 2: Connect GitHub to Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub repositories
5. Select your resume repository

## Step 3: Configure Build Settings

Netlify will automatically detect your Astro project, but verify these settings:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 20.x (already configured in `netlify.toml`)

Click "Deploy site"

## Step 4: Automatic Deployments

Once connected, Netlify will automatically:
- Deploy whenever you push to the `main` branch
- Build your site using the settings in `netlify.toml`
- Provide a deployment URL (e.g., `your-site-name.netlify.app`)

You can view deployment status via:
- The Netlify dashboard
- The badge in your README.md
   - Value: Your Netlify personal access token


## Step 5: Custom Domain (Optional)

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
4. Netlify will automatically detect the changes and deploy

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

## Troubleshooting

If you encounter issues:

1. **Build Failures**: Check the Netlify deploy logs in your dashboard
2. **Missing Dependencies**: Ensure all dependencies are listed in `package.json`
3. **Node Version Issues**: The project requires Node 20.x (configured in `netlify.toml`)
4. Check the [Astro documentation](https://docs.astro.build)
5. Review [Netlify documentation](https://docs.netlify.com)

---

Your resume website is now live and will automatically update whenever you push changes to the main branch!
