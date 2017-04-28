const helper = require('sendgrid').mail;
const sg = require('sendgrid')(require('../../sendgrid.json').SENDGRID_API_KEY_2);

module.exports = require('express').Router()
  .post('/', (req, res, next) => {

  let encodedData = req.body.data;
  let from_email = new helper.Email(req.body.fromAddress);
  let to_email = new helper.Email(req.body.toAddress);
  let subject = req.body.subjectLine;
  let content = new helper.Content('text/plain', req.body.bodyContent);

  let mail = new helper.Mail(from_email, subject, to_email, content);

  let attachment = new helper.Attachment();
  attachment.setContent(encodedData);
  attachment.setFilename('audio.wav');
  mail.addAttachment(attachment);

  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

   sg.API(request)
    .then(response => {
      res.status(202).json(request);
      console.log("SG res status code: ", response.statusCode)
    })
    .catch(error => {
      console.log("SG RES err is: ", error.response.status, error.response.headers);
      console.log("SG REQ info: ", request.body);
      res.json(request.body);
    });
})


.post('/test', (req, res, next) => {
  //test route of sendgrid server/browser integration without any audio
  let from_email = new helper.Email(req.body.message.fromAddress);
  let to_email = new helper.Email(req.body.message.toAddress);
  let subject = req.body.message.subjectLine;
  let content = new helper.Content('text/plain', req.body.message.bodyContent);
  let mail = new helper.Mail(from_email, subject, to_email, content);

  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

   sg.API(request)
    .then(response => {
      res.status(response.statusCode).json(request);
      console.log("res status code: ", response.statusCode)
    })
    .catch(error => {
      console.log("Hey Soren! SG err is: ", error.response.statusCode);
    });
})
