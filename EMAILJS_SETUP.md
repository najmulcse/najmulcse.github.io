# EmailJS Setup Guide

## 📧 How to Configure Email Sending for Your Portfolio

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Save your Service ID** - you'll need this later

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} <{{from_email}}>
To: {{to_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Save your Template ID** - you'll need this later

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your "Public Key" 
3. **Copy this key** - you'll need it

### Step 5: Update Your Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const emailjsConfig = {
  serviceId: 'YOUR_ACTUAL_SERVICE_ID',
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID', 
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY'
};
```

### Step 6: Test Your Setup
1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit a test message
4. Check your email inbox!

## 🔧 Template Variables Used

Your email template can use these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (najmul2022@gmail.com)

## 🚀 Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- All major email providers
- Template customization
- Perfect for portfolio contact forms!

## 🔒 Security Note

Your EmailJS public key is safe to use in frontend code - it's designed for client-side use and has built-in rate limiting and spam protection.

---

**Need help?** Check the [EmailJS documentation](https://www.emailjs.com/docs/) or contact support. 