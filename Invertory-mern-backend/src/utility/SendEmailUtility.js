const nodeMailer = require("nodemailer");

const SendEmailUtility =async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'stacy.kub84@ethereal.email',
            pass: 'XDRXRqPM5VJRgg7F1r'
        },
    });
    let mailOptions = {
        from: ' "Inventory"  <stacy.kub84@ethereal.email',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText,
        html:`<h1>${EmailText}</h1>`
    };

    return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility;