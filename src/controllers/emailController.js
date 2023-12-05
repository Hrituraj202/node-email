const mailer = require('../utils/mailer')

let sendMail = async (req, res) => {
  try {
    const { to, subject, body } = req.body

    await mailer.sendMail(to, subject, body)

    res.send('Your email has been sent successfully.')
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

module.exports = {
  sendMail: sendMail
}