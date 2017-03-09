var helper = require('sendgrid').mail;

 module.exports = require('express').Router()
  .get('/', (req, res, next) => {

  let from_email = new helper.Email('example@sendgrid.net');
  let to_email = new helper.Email('spyeadon@gmail.com');
  let subject = "SendGrid voice-connect test email";
  let content = new helper.Content("text/plain", "This is the first test from SendGrid I hope it works");
  let mail = new helper.Mail(from_email, subject, to_email, content);

  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });


   sg.API(request)
    .then(response => {
      res.json(response)
      console.log(response.statusCode)
      console.log(response.body)
      console.log(response.headers)
    })
    .catch(error => {
      console.log(error.response.statusCode);
    });

})
