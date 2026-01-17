# Estospaces Landing Page

Standalone landing page for Estospaces.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

The server will start on `http://localhost:5173`

## Build

```bash
npm run build
```

## Structure

- `src/components/landing/` - All landing page components
- `src/pages/Home.jsx` - Main landing page
- `src/contexts/ChatContext.jsx` - Chat widget context
- `src/hooks/` - Custom hooks (useParallax, useWaitlist, useLiveChat)
- `src/lib/supabase.js` - Supabase client (for newsletter)
- `src/components/ui/` - Shared UI components
