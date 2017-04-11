const helper = require('sendgrid').mail;
const sg = require('sendgrid')(require('../../sendgrid.json').SENDGRID_API_KEY_2);
const fs = require('fs');
const File = require('file-api').File;
const FileReader = require('file-api').FileReader;
var fileReader = new FileReader();

module.exports = require('express').Router()
  .post('/', (req, res, next) => {

  let encodedData = req.body.data;
  let decodedData = Object.keys(req.body).reduce((accum, element) => {
    return accum + element;
  }, '');

  // console.log("request is: ", req.body);

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
      res.status(response.statusCode).json(request);
      console.log("res status code: ", response.statusCode)
    })
    .catch(error => {
      console.log("Hey Soren! API err is: ", error.response.statusCode);
    });
})
