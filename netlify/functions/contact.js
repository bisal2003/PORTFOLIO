exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Here you could integrate with email services like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Mailgun
    
    // For now, we'll just log the submission and return success
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      subject: data.subject || 'No subject',
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // In a real implementation, you'd send an email here
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'bisalprasad2003@gmail.com',
      from: 'contact@yourportfolio.com',
      subject: `Portfolio Contact: ${data.subject}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        
        Message:
        ${data.message}
      `,
      html: `
        <h3>New Portfolio Contact</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <h4>Message:</h4>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    await sgMail.send(msg);
    */

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully!' 
      }),
    };
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: 'Failed to process form submission'
      }),
    };
  }
};
