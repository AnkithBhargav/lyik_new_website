import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  let data = await req.json();
  data = {...data}
  console.log(data)
  
  await sendgrid.send({
    to: "careers@lyik.com",
    from: "no-reply@lyik.com",
    subject: `New Career Form Submission: ${data.applied}`,
    html: `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Career Form Submission: ${data.applied}</title>
    </head>
    <body>
        <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
                <td bgcolor="#F7F7F7" align="center" style="padding: 20px 0;">
                    <table width="600" cellspacing="0" cellpadding="0">
                        <tr>
                            <td bgcolor="#FFFFFF" style="padding: 20px; border-radius: 5px;">
                                <h1>New Career Form Submission: ${data.applied}</h1>
                                <p></p>
                                <p>A user has recently submitted a career form on our company's website. Below are the details of the submission:</p>
    
                                <ul>
                                    <li><strong>Name:</strong> ${data.name}</li>
                                    <li><strong>Phone Number:</strong> ${data.phone}</li>
                                    <li><strong>Email:</strong> ${data.email}</li>
                                    <li><strong>LinkedIn:</strong> ${data.linkedin}</li>
                                    <li><strong>Portfolio:</strong> ${data.portfolio}</li>
                                    <li><strong>Role Interested In:</strong> ${data.interestedRole}</li>
                                    <li><strong>Main Expertise:</strong> ${data.expertise}</li>
                                    <li><strong>Mode:</strong> ${data.workMode} | ${data.workFrom}</li>
                                    <li><strong>Location:</strong> ${data.location}</li>
    
                                </ul>
    
                                <p><strong>Cover Letter</strong><br/>
                                    ${data.cover}
                                </p>
    
                                <p>This information has been automatically recorded. As the designated contact for such submissions, we wanted to ensure you are informed promptly.</p>
    
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`
  });
  return new Response('OK')
}
