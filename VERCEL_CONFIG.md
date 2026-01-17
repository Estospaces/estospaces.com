# Vercel Configuration

## Files Created

### `vercel.json`
Configuration file for Vercel deployment:
- **Rewrites**: All routes redirect to `index.html` for SPA routing (React Router)
- **Build Command**: `npm run build`
- **Output Directory**: `dist` (Vite's default output)
- **Framework**: `vite` (for optimized builds)

### `public/_redirects`
Netlify-style redirects file (also works for Vercel):
- `/* /index.html 200` - All routes redirect to index.html with 200 status

## Deployment

### Prerequisites
- Vercel account
- Project connected to Git repository

### Deployment Steps

1. **Connect Repository**
   ```bash
   vercel login
   vercel link
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

Or deploy directly from Vercel dashboard by connecting your Git repository.

### Build Settings (Auto-detected by Vercel)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Route Handling

The landing page is a Single Page Application (SPA) using React Router. Both `vercel.json` and `_redirects` ensure all routes are handled correctly:

- Direct URL access (e.g., `/about`)
- Browser refresh on any route
- Deep linking to sections

## Verification

After deployment, test:
1. Root URL: `https://your-domain.com/`
2. Direct route access: `https://your-domain.com/about` (if added)
3. Browser refresh on any route

All routes should serve `index.html` and React Router will handle client-side routing.
