const mailer = require('../utils/mailer')

let sendMail = async (req, res) => {
  try {
    const { type, body } = req.body

    const emailContent = `Type of Service: ${type}\n\n${JSON.stringify(body, null, 2)}`;

    await mailer.sendMail('hrituraj202@gmail.com', 'Client Query and Requirements', emailContent)

    res.send('Your email has been sent successfully.')
  } catch (error) {
    res.send(error)
  }
}

module.exports = {
  sendMail: sendMail
}