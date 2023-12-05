const nodeMailer = require('nodemailer')

const adminEmail = '07a2b831f79eb7'
const adminPassword = 'e465e03a51b13f'
const mailHost = 'sandbox.smtp.mailtrap.io'
const mailPort = 25

const sendMail = (to, subject, htmlContent) => {
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false,
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })

  const options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  }

  return transporter.sendMail(options)
}

module.exports = {
  sendMail: sendMail
}
