const nodemailer = require('nodemailer');
const path = require('path');

const sendMail = async (targets, subject, message, attachments) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'di22feb@gmail.com',  //your username here
            pass: 'amsindhu'   //your password here
        }
    });

    const mailOptions = {
        from: 'Company Registration Portal <di22feb@gmail.com>',   //your username(emailid) within the <>
        to: targets,
        subject: subject,
        html: message,
        attachments: attachments,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
};

module.exports = sendMail;