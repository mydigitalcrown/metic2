# Search Engine Verification Files

When you verify your site with search engines, they may ask you to upload an HTML file. Place those files in the `public/` folder.

## Google Search Console Verification

After you add your site to Google Search Console, they'll give you a file like:
- `google1234567890abcdef.html`

**To add it:**
1. Download the file from Google Search Console
2. Place it in: `public/google1234567890abcdef.html`
3. Deploy your site
4. Click "Verify" in Google Search Console

The file URL will be: `https://metic.ai/google1234567890abcdef.html`

## Bing Webmaster Tools Verification

Bing may give you a file like:
- `BingSiteAuth.xml`

**To add it:**
1. Download from Bing Webmaster Tools
2. Place it in: `public/BingSiteAuth.xml`
3. Deploy your site
4. Click "Verify" in Bing

The file URL will be: `https://metic.ai/BingSiteAuth.xml`

## Alternative Verification Methods

### Meta Tag Method
You can also verify by adding a meta tag to your layout.tsx:

```tsx
// In src/app/layout.tsx metadata:
verification: {
  google: 'your-google-code-here',
  bing: 'your-bing-code-here',
  yandex: 'your-yandex-code-here',
}
```

### DNS TXT Record (Recommended for Production)
This is the most permanent method:

**For Google:**
```
TXT record: google-site-verification=YOUR_CODE_HERE
```

**For Bing:**
```
TXT record: msvalidate.01=YOUR_CODE_HERE
```

Add these in your domain provider's DNS settings (Vercel, Cloudflare, etc.)

## Current Status

✅ Meta verification codes are already in layout.tsx (placeholder values)
✅ You just need to replace them with your actual codes after signup
✅ IndexNow key file is already created: `public/4d8c7e9f2a1b3c5e6d7f8a9b0c1d2e3f.txt`

## Need Help?

When you get your verification codes, I can help you add them properly!
