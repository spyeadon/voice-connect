const helper = require('sendgrid').mail;
const sg = require('sendgrid')(require('../../sendgrid.json').SENDGRID_API_KEY);
const fs = require('fs');

module.exports = require('express').Router()
  .post('/', (req, res, next) => {

  let dataURL = Object.keys(req.body)[0];
  dataURL = dataURL.split(' ').join('+');

  let encodedData = Object.keys(req.body)[0];
  encodedData = "data:audio/webm;base64," + encodedData.split(' ').join('+');

  let decodedData = Object.keys(req.body).reduce((accum, element) => {
    return accum + element;
  }, '');
  let decodedDataLength = Object.keys(req.body).length;

  let recordRTC = Object.keys(req.body);

  console.log("data content is: ", dataURL);

  let from_email = new helper.Email('spyeadon@gmail.com');
  let to_email = new helper.Email('spyeadon@gmail.com');
  let subject = "SendGrid voice-connect test Close please";
  // let content = new helper.Content('text/plain', 'test of SG email integration');

  let contentFILE = {buffer: req.body.toString('base64')};
  // let content = new helper.Content("audio/webm", contentFILE, "file-name.weba");
  let content = new helper.Content("text/plain", dataURL);
  // let content = new helper.Content('text/html', `<a href=${dataURL}>Audio recording</a>`);

  let mail = new helper.Mail(from_email, subject, to_email, content);
  // console.log("mail obj contents: ", mail.getContents()[0].value.buffer);

  // let attachment = new helper.Attachment();
  // var audioAttach = new Buffer(decodedData, 'base64');
  // attachment.setContent(audioAttach);
  // attachment.setType('audio/webm');
  // attachment.setFilename('file.weba');
  // attachment.setDisposition('attachment');
  // mail.addAttachment(attachment);

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
      res.status(200).json(request);
      console.log("res status code: ", response.statusCode)
    })
    .catch(error => {
      console.log("Hey Soren! API err is: ", error.response.statusCode);
    });
})
