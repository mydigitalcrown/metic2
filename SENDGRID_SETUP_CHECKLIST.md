# SendGrid Setup Checklist for Metic.ai

## ✅ Completed Steps
- [x] SendGrid package installed (`@sendgrid/mail`)
- [x] API route created (`/api/contact`)
- [x] Professional email templates configured
- [x] Environment variables template created (`.env.local`)
- [x] SendGrid website opened in browser

## 🔄 Steps You Need to Complete

### Step 1: Create SendGrid Account
- [ ] Go to the opened SendGrid tab
- [ ] Click "Sign Up" if you don't have an account
- [ ] Use your business email (preferably hello@metic.ai or your main email)
- [ ] Verify your email address
- [ ] Complete the onboarding process

### Step 2: Create API Key
- [ ] Login to SendGrid dashboard
- [ ] Navigate to: Settings → API Keys
- [ ] Click "Create API Key"
- [ ] Choose "Restricted Access"
- [ ] Name it: "Metic.ai Contact Form"
- [ ] Set permissions:
  - [ ] Mail Send: **Full Access**
  - [ ] Stats: Read Access (optional)
- [ ] Click "Create & View"
- [ ] **COPY THE API KEY** (you won't see it again!)
- [ ] Save it securely

### Step 3: Update Environment Variables
- [ ] Open the `.env.local` file in your project
- [ ] Replace `SG.your_actual_api_key_here` with your actual API key
- [ ] Save the file

### Step 4: Domain Authentication (Recommended)
- [ ] In SendGrid dashboard: Settings → Sender Authentication
- [ ] Click "Authenticate Your Domain"
- [ ] Enter domain: `metic.ai`
- [ ] Choose your DNS provider
- [ ] Add the provided DNS records to your domain
- [ ] Wait for verification (can take up to 48 hours)

### Step 5: Test the Setup
- [ ] Run: `npm run dev`
- [ ] Go to: http://localhost:3000/contact
- [ ] Fill out the contact form with test data
- [ ] Submit the form
- [ ] Check for success message
- [ ] Check SendGrid dashboard for activity
- [ ] Check email inbox for both:
  - [ ] Admin email to hello@metic.ai
  - [ ] Auto-reply to your test email

## 🚨 Important Notes

1. **API Key Security**: Never share or commit your API key
2. **Free Tier**: 100 emails/day should be sufficient for contact forms
3. **Domain Authentication**: Improves deliverability significantly
4. **Testing**: Always test in development before going live

## 🔧 Troubleshooting

If emails aren't working:
1. Check console for error messages
2. Verify API key permissions in SendGrid
3. Ensure domain is authenticated
4. Check spam folders
5. Review SendGrid activity dashboard

## ✅ When Complete

Your contact form will:
- Send professional emails to hello@metic.ai
- Send branded auto-replies to users
- Handle errors gracefully
- Provide real-time feedback

## 📞 Need Help?

If you encounter issues:
1. Check the SendGrid documentation
2. Review error messages in browser console
3. Verify environment variables are set correctly
4. Test with a simple email first