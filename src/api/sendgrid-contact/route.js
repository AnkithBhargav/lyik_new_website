import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  let data = await req.json();
  data = { ...data };
  console.log(data);

  await sendgrid.send({
    to: "contact@lyik.com",
    from: "no-reply@lyik.com",
    subject: `New Contact Form Submission : ${data.title}`,
    html: `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Contact Form Submission: ${data.title}</title>
    </head>
    <body>
        <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
                <td bgcolor="#F7F7F7" align="center" style="padding: 20px 0;">
                    <table width="600" cellspacing="0" cellpadding="0">
                        <tr>
                            <td bgcolor="#FFFFFF" style="padding: 20px; border-radius: 5px;">
                                <h1>New Contact Form Submission: ${data.title}</h1>
                                
                                <p>A user has recently submitted a contact form on our company's website. Below are the details of the submission:</p>
    
                                <ul>
                                    <li><strong>Name:</strong> ${data.name}</li>
                                    <li><strong>Phone Number:</strong> ${data.phone}</li>
                                    <li><strong>Email:</strong> ${data.email}</li>
                                    <li><strong>Website:</strong> ${data.website}</li>
                                    <li><strong>Subject</strong> ${data.subject}</li>
                                    <li><strong>Date & Time of Submission:</strong> ${data.date}</li>
                                    <li><strong>Feedback Category:</strong> ${data.feedback}</li>
                                    <li><strong>Support Category:</strong> ${data.support}</li>    
                                </ul>
    
                                <p><strong>Message</strong><br/>
                                    ${data.message}
                                </p>
    
                                <p>This information has been automatically recorded. As the designated contact for such submissions, we wanted to ensure you are informed promptly.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`,
  });
  return new Response("OK");
}
