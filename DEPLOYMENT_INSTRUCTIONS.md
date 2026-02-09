# Deployment Instructions

## Step 1: Push to GitHub

After creating your GitHub repository, run these commands:

```bash
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify (Recommended - Easiest)

### Option A: Drag & Drop (Fastest)
1. Go to https://app.netlify.com/drop
2. Drag the `build` folder to the upload area
3. Your site will be live in seconds!
4. You can claim the site and customize the domain name

### Option B: Connect GitHub (Better for updates)
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and authorize Netlify
4. Select your portfolio repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"
7. Your site will be live at a URL like: `your-site-name.netlify.app`

## Step 3: Deploy to Vercel (Alternative)

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect React settings
5. Click "Deploy"
6. Your site will be live at: `your-site-name.vercel.app`

## Step 4: Custom Domain (Optional)

Both Netlify and Vercel allow you to add a custom domain:
- Go to Site Settings → Domain Management
- Add your custom domain
- Follow DNS configuration instructions

## Updating Your Portfolio

After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push
```

If using Netlify/Vercel with GitHub integration, your site will auto-deploy!

## Your Portfolio Features

✅ CV Download functionality
✅ Animated hero section with tech badges
✅ Responsive design
✅ Dark/Light mode
✅ Contact form
✅ Projects showcase
✅ Skills section with Canva & Visily
✅ Experience timeline

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- GitHub Pages: https://pages.github.com
