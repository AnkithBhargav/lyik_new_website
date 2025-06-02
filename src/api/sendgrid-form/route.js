import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  let data = await req.json();
  
  const attachment = {
    content: data.file, // Base64 string of the file
    filename: data.filename, // The name of the file, including extension
    type: data.filetype, // The MIME type of the file
    disposition: 'attachment',
    contentId: 'careerAttachment', // Optional: Use if you want to reference the file in the email body
  };
  
  await sendgrid.send({
    to: "careers@lyik.com",
    from: "no-reply@lyik.com",
    subject: `New Career Form Submission: ${data.applied}`,
    html: `
    <!DOCTYPE html>
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
                                <p>A user has recently submitted a career form on our company's website. Below are the details of the submission:</p>
                                <ul>
                                    <li><strong>Name:</strong> ${data.name}</li>
                                    <li><strong>Phone Number:</strong> ${data.phone}</li>
                                    <li><strong>Email:</strong> ${data.email}</li>
                                    <li><strong>LinkedIn:</strong> ${data.linkedin}</li>
                                    <li><strong>Portfolio:</strong> ${data.portfolio}</li>
                                    <li><strong>Current Designation:</strong> ${data.currentDesignation}</li>
                                    <li><strong>Role Interested In:</strong> ${data.interestedRole}</li>
                                    <li><strong>Main Expertise:</strong> ${data.expertise}</li>
                                    <li><strong>Current Salary:</strong> ${data.cSalary}</li>
                                    <li><strong>Expected Salary:</strong> ${data.eSalary}</li>
                                    <li><strong>Work Preference:</strong> ${data.workFrom}</li>
                                    <li><strong>Work Mode:</strong> ${data.workMode}</li>
                                    <li><strong>Location:</strong> ${data.location}</li>
                                    <li><strong>Cover Letter:</strong> ${data.cover}</li>
                                </ul>
                                <p>This information has been automatically recorded. As the designated contact for such submissions, we wanted to ensure you are informed promptly.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`,
    attachments: [attachment] // Attach the file
  });
  
  return new Response('OK', { status: 200 });
}
