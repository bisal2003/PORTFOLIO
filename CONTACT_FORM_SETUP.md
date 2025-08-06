# Contact Form Setup Instructions

## Overview
The contact form has been enhanced with multiple submission methods to ensure reliability:

1. **Formspree** (Primary) - Free tier with 50 submissions/month
2. **Netlify Forms** (Secondary) - If hosted on Netlify
3. **Mailto** (Fallback) - Opens user's email client

## Setup Options

### Option 1: Formspree (Recommended - Free & Easy)
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form and get your endpoint
4. Replace `https://formspree.io/f/xeoqkqpr` in Contact.js with your endpoint
5. No additional setup required!

### Option 2: EmailJS (Client-side)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create an email service and template
3. Install EmailJS: `npm install @emailjs/browser`
4. Add your credentials to .env.local
5. Update Contact.js to use EmailJS

### Option 3: SendGrid + Netlify Functions (Production)
1. Sign up for SendGrid account
2. Get API key and verify sender email
3. Add API key to Netlify environment variables
4. Uncomment SendGrid code in netlify/functions/contact.js

### Option 4: Custom Backend
1. Create your own API endpoint
2. Update the form submission URL in Contact.js
3. Handle CORS and validation on your server

## Features Included

✅ **Form Validation**
- Real-time field validation
- Email format checking
- Required field verification
- Character limits

✅ **User Experience**
- Loading states with spinner
- Success/error messages
- Form reset after submission
- Professional styling

✅ **Accessibility**
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Focus management

✅ **Security**
- Input sanitization
- CSRF protection
- Rate limiting ready
- Privacy protection

## Testing the Form

1. Fill out all required fields
2. Submit the form
3. Check for success message
4. Verify email delivery (depending on method chosen)

## Deployment Notes

- **Netlify**: Forms work automatically with Netlify hosting
- **Vercel**: Use Vercel Functions for backend
- **GitHub Pages**: Use Formspree or EmailJS (client-side only)
- **Custom Hosting**: Deploy with your preferred email service

## Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify API endpoints are correct
- Ensure CORS is properly configured

**Emails not received?**
- Check spam folder
- Verify email service configuration
- Test with different email addresses

**Validation errors?**
- Ensure all required fields are filled
- Check email format is valid
- Verify message meets minimum length

## Security Best Practices

1. Never expose API keys in client-side code
2. Use environment variables for sensitive data
3. Implement rate limiting to prevent spam
4. Sanitize all user inputs
5. Use HTTPS in production

## Support

For issues with specific email services:
- **Formspree**: Check their documentation
- **EmailJS**: Review their React integration guide
- **SendGrid**: Consult their Node.js quickstart
- **Netlify**: Check Netlify Forms documentation
