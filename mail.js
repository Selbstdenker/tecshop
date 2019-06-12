const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: 'dd6673566797aa0f1e65c3cbc0f4223b-16ffd509-59dd4000',
    domain: 'sandbox66de928b1e114b01a58e9b74eb9b0832.mailgun.org?'
  }
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (email, subject, text, cb)=>{
  const mailOptions = {
    from: email,
    to: 'selbstdenkerdot@hotmail.com',
    subject: subject,
    text: text
  }
  
  transporter.sendMail(mailOptions, (err, data)=>{
    if(err){
      cb(err, null)
    }else{
      cb(null, data)
    }
  })
}

module.exports = sendMail 