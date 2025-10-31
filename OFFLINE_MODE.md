# Offline Development Configuration

This file explains how to configure the project for completely offline development.

## Quick Setup for Offline Mode

If you need to build the project without internet access (e.g., Google Fonts unavailable):

### Option 1: Use System Fonts (Recommended for Offline Work)

1. Open `src/lib/fonts.ts`
2. Comment out the Google Font imports (lines 8-39)
3. Uncomment the offline mode section (lines 44-58)

The file should look like this:

```typescript
// Comment these out:
// import { Inter, JetBrains_Mono } from "next/font/google";
// export const inter = Inter({ ... });
// export const jetbrainsMono = JetBrains_Mono({ ... });

// Uncomment these:
export const inter = {
  variable: "--font-sans",
  style: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
  },
};

export const jetbrainsMono = {
  variable: "--font-mono",
  style: {
    fontFamily: "Consolas, Monaco, 'Courier New', monospace",
  },
};
```

### Option 2: Cache Google Fonts (One-time Internet Required)

1. Build the project once with internet connection:
   ```bash
   npm run build
   ```
2. Next.js will cache the fonts in `.next/cache`
3. You can now work offline - the cached fonts will be used

## Why This Is Needed

Next.js fetches Google Fonts during the build process. Without internet access:
- The build will fail with "ENOTFOUND fonts.googleapis.com" error
- The development server may have issues loading fonts

## Switching Between Online and Offline Modes

### For Online Development (default):
Keep the Google Font imports active in `src/lib/fonts.ts`

### For Offline Development:
Use system fonts as described in Option 1 above

### Before Pushing to Git:
Make sure to restore the Google Font configuration (Option 1 should be reverted) so the production build uses the proper fonts.

## Impact on Design

System fonts will look slightly different from Google Fonts:
- **Inter** → Falls back to system-ui, Segoe UI, Roboto, Arial
- **JetBrains Mono** → Falls back to Consolas, Monaco, Courier New

The visual difference is minimal and won't affect functionality during development.
