import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  if(req.method === 'POST') {
    const {name, email,subject, message} = req.body;
    const msg = {
      to: email, // Change to your recipient
      from: 'accounts@techdots.dev', // Change to your verified sender
      subject: subject,
      html: message,
    }
    console.log(msg, req.body);

  mail
    .send(msg)
    .then((data = undefined) => {
      console.log('Res', data);
      res.status(200).json({success: true})
    })
    .catch((error) => {
      res.status(200).json({
        success: false,
        error
      })
    })
  }
};

export default sendEmail;