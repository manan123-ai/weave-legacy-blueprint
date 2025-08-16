import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, company, fabricInterest, message } = await req.json()

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Email content
    const emailSubject = `New Contact Form Submission from ${firstName} ${lastName}`
    const emailBody = `
      New contact form submission:
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company || 'Not provided'}
      Fabric Interest: ${fabricInterest || 'Not specified'}
      
      Message:
      ${message}
      
      ---
      Sent from Janki Nath & Co. contact form
    `

    // For now, we'll return success - you can integrate with your preferred email service
    // Common options: Resend, SendGrid, or Supabase's built-in email functionality
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      company,
      fabricInterest,
      message
    })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your inquiry. We will get back to you soon!' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return new Response(
      JSON.stringify({ error: 'Failed to process your request' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})