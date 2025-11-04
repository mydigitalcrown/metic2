# SendGrid Setup Guide for Metic.ai Contact Form

## 1. Create SendGrid Account
1. Go to [SendGrid](https://sendgrid.com) and create a free account
2. Verify your email address
3. Complete the setup process

## 2. Get API Key
1. Login to SendGrid dashboard
2. Go to Settings → API Keys
3. Click "Create API Key"
4. Choose "Restricted Access"
5. Give it a name like "Metic.ai Contact Form"
6. Grant permissions:
   - Mail Send: Full Access
   - Stats: Read Access (optional)
7. Copy the generated API key (you won't see it again!)

## 3. Domain Authentication (Recommended)
1. Go to Settings → Sender Authentication
2. Click "Authenticate Your Domain"
3. Add your domain (metic.ai)
4. Follow the DNS setup instructions
5. This improves deliverability and allows sending from hello@metic.ai

## 4. Configure Environment Variables
Create a `.env.local` file in your project root:

```env
SENDGRID_API_KEY=SG.your_actual_api_key_here
SENDGRID_FROM_EMAIL=hello@metic.ai
```

**Important:** 
- Never commit the `.env.local` file to git
- The from email should match your authenticated domain

## 5. Test the Setup
1. Start your development server: `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out and submit the form
4. Check:
   - Your SendGrid dashboard for activity
   - hello@metic.ai inbox for the form submission
   - The submitter's email for the auto-reply

## 6. Production Deployment
When deploying to production (Vercel, Netlify, etc.):
1. Add the environment variables to your hosting platform
2. Make sure your domain is authenticated with SendGrid
3. Test the contact form in production

## 7. Monitoring
- Check SendGrid dashboard for delivery stats
- Monitor bounce rates and spam reports
- Set up activity feed to track emails

## 8. Troubleshooting
- **403 Forbidden**: Check API key permissions
- **400 Bad Request**: Verify from email is authenticated
- **Emails not delivered**: Check spam folder, verify domain authentication
- **Form shows fallback message**: Environment variables not set

## Free Tier Limits
- SendGrid free tier: 100 emails/day
- Should be sufficient for contact form usage
- Upgrade if you need more volume

Your contact form will now:
✅ Send professional emails to hello@metic.ai
✅ Send auto-reply confirmations to users  
✅ Handle errors gracefully with fallbacks
✅ Provide immediate user feedback