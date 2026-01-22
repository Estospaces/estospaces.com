# Email Setup for Reservation Form

The reservation form now sends emails to `contact@estospaces.com` instead of saving to Supabase.

## Email Service Configuration

The API route (`api/send-reservation-email.js`) supports multiple email providers. Choose one:

### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to Vercel environment variables:
   - `RESEND_API_KEY` - Your Resend API key
   - `RESEND_FROM_EMAIL` - Sender email (e.g., `Estospaces <noreply@estospaces.com>`)
   - `RESERVATION_EMAIL` - Recipient email (defaults to `contact@estospaces.com`)
   - `EMAIL_SERVICE` - Set to `resend`

### Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Add to Vercel environment variables:
   - `SENDGRID_API_KEY` - Your SendGrid API key
   - `SENDGRID_FROM_EMAIL` - Sender email (e.g., `noreply@estospaces.com`)
   - `RESERVATION_EMAIL` - Recipient email (defaults to `contact@estospaces.com`)
   - `EMAIL_SERVICE` - Set to `sendgrid`

### Option 3: SMTP (Custom)

For custom SMTP servers, you'll need to modify the API route to use a library like `nodemailer`.

## Vercel Environment Variables

Add these in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the variables listed above based on your chosen email service

## Testing

### Local Development

For local development, you have two options:

1. **Use Vercel CLI** (Recommended for testing API routes):
   ```bash
   npm install -g vercel
   vercel dev
   ```
   This will run your project with API route support and will automatically load your `.env` file.

2. **Standard Vite Dev Server** (Frontend only):
   ```bash
   npm run dev
   ```
   Note: API routes won't work with this method. Use `vercel dev` to test the email functionality locally.

3. **Production Testing**: Deploy to Vercel and test the API route in production.

### Development Mode Behavior

In development mode, if no email service is configured, the API will log the email content to the console instead of sending it. This allows you to test the form submission flow without setting up email credentials.

## Email Template

The email template includes:
- Professional HTML formatting
- All form fields (user type, name, email, phone, location, preferences)
- Timestamp of submission
- Clean, scannable layout

## API Endpoint

- **Path**: `/api/send-reservation-email`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Body:
```json
{
  "userType": "buyer",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "location": "New York, NY",
  "lookingFor": "Looking for a 2-bedroom apartment..."
}
```

### Response:
```json
{
  "success": true,
  "message": "Reservation email sent successfully"
}
```
