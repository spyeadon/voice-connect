const helper = require('sendgrid').mail;
const sg = require('sendgrid')(require('../../sendgrid.json').SENDGRID_API_KEY);
const fs = require('fs');

module.exports = require('express').Router()
  .post('/', (req, res, next) => {

  let encodedData = Object.keys(req.body)[0];
  let decodedData = Object.keys(req.body).reduce((accum, element) => {
    return accum + element;
  }, '');
  let dataLength = Object.keys(req.body);
  let recordRTC = Object.keys(req.body);

  console.log("data content is: ", recordRTC[0]);

  let from_email = new helper.Email('SOREN@sendgrid.net');
  let to_email = new helper.Email('spyeadon@gmail.com');
  let subject = "SendGrid voice-connect test";
  let content = new helper.Content('text/plain', 'test of SG email integration');
  let mail = new helper.Mail(from_email, subject, to_email, content);

  let attachment = new helper.Attachment();
  var audioAttach = new Buffer(decodedData, 'base64');
  attachment.setContent(audioAttach);
  attachment.setType('audio/webm');
  attachment.setFilename('file.weba');
  attachment.setDisposition('attachment');
  mail.addAttachment(attachment);

  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

   sg.API(request)
    .then(response => {
      res.status(200).json(request);
      console.log("SG res status code: ", response.statusCode)
    })
    .catch(error => {
      console.log("SG RES err is: ", error.response.status, error.response.headers);
      console.log("SG REQ info: ", request.body);
      res.json(request.body);
    });
})
.get('/', (req, res, next) => {

  let from_email = new helper.Email('example@sendgrid.net');
  let to_email = new helper.Email('spyeadon@gmail.com');
  let subject = "SendGrid voice-connect test email";
  let content = new helper.Content("text/plain", "Test of audio file attachment");
  let mail = new helper.Mail(from_email, subject, to_email, content);

  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

   sg.API(request)
    .then(response => {
      res.status(200).json(request);
      console.log("res status code: ", response.statusCode)
    })
    .catch(error => {
      console.log("Hey Soren! API err is: ", error.response.statusCode);
    });
})
