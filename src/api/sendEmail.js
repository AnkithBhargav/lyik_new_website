import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(
    "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"
    // process.env.SENDGRID_API_KEY
    );

export async function sendEmail(data) {
//   let data = await req.json();
//   data = { ...data };
  console.log(data);
   console.log('sending....');

  const r = await sendgrid.send({
    to: "prajwal.sanesi@lyik.com",
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
  return r;
}




export async function sendDemoModal(data) {
//   let data = await req.json();
//   data = { ...data };
//   console.log(data);

  await sendgrid.send({
    to: "contact@lyik.com",
    from: "no-reply@lyik.com",
    subject: `New Contact Form Submission: ${data.name}`,
    html: `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Contact Form Submission: ${data.name}</title>
    </head>
    <body>
        <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
                <td bgcolor="#F7F7F7" align="center" style="padding: 20px 0;">
                    <table width="600" cellspacing="0" cellpadding="0">
                        <tr>
                            <td bgcolor="#FFFFFF" style="padding: 20px; border-radius: 5px;">
                                <h1>New Contact Form Submission</h1>
                                
                                <p>A user has recently submitted a contact form on our company's website. Below are the details of the submission:</p>
    
                                <ul>
                                    <li><strong>Name:</strong> ${data.name}</li>
                                    <li><strong>Designation:</strong> ${data.designation}</li>
                                    <li><strong>Company:</strong> ${data.company}</li>
                                    <li><strong>Email:</strong> ${data.email}</li>
                                    <li><strong>Phone Number:</strong> ${data.phone}</li>
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
  });
  return new Response("OK");
}





export async function sendOnboardMail(data) {
//   let data = await req.json();
//   data = { ...data };
//   console.log(data);

  await sendgrid.send({
    to: "contact@lyik.com",
    from: "no-reply@lyik.com",
    subject: `New Contact Submission: ${data.name}`,
    html: `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Contact Submission: ${data.name}</title>
    </head>
    <body>
        <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
                <td bgcolor="#F7F7F7" align="center" style="padding: 20px 0;">
                    <table width="600" cellspacing="0" cellpadding="0">
                        <tr>
                            <td bgcolor="#FFFFFF" style="padding: 20px; border-radius: 5px;">
                                <h1>New Contact Submission</h1>
                                
                                <p>A user has submitted their contact details on the website. Here are the details:</p>
    
                                <ul>
                                    <li><strong>Name:</strong> ${data.name}</li>
                                    <li><strong>Contact:</strong> ${data.contact}</li>
                                </ul>
    
                                <p>This information has been automatically recorded. Please follow up as needed.</p>
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





export async function sendContactMail(data) {
//   let data = await req.json();
//   data = { ...data };
//   console.log(data);

  await sendgrid.send({
    to: "contact@lyik.com",
    from: "no-reply@lyik.com",
    subject: `New Contact Form Submission: ${data.name}`,
    html: `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Contact Form Submission: ${data.name}</title>
    </head>
    <body>
        <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
                <td bgcolor="#F7F7F7" align="center" style="padding: 20px 0;">
                    <table width="600" cellspacing="0" cellpadding="0">
                        <tr>
                            <td bgcolor="#FFFFFF" style="padding: 20px; border-radius: 5px;">
                                <h1>New Contact Form Submission</h1>
                                
                                <p>A user has submitted the contact form on the website. Here are the details:</p>
    
                                <ul>
                                    <li><strong>Name:</strong> ${data.name}</li>
                                    <li><strong>Company Name:</strong> ${data.companyName}</li>
                                    <li><strong>Email:</strong> ${data.email}</li>
                                    <li><strong>Phone Number:</strong> ${data.phone}</li>
                                    <li><strong>Designation:</strong> ${data.designation}</li>
                                    <li><strong>State:</strong> ${data.state}</li>
                                    <li><strong>Industry:</strong> ${data.industry}</li>
                                </ul>
    
                                <p><strong>Message:</strong><br/>
                                    ${data.message}
                                </p>
    
                                <p>This information has been automatically recorded. Please review and follow up if needed.</p>
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



