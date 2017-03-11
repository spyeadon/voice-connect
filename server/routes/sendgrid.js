const helper = require('sendgrid').mail;
const sg = require('sendgrid')(require('../../sendgrid.json').SENDGRID_API_KEY);

module.exports = require('express').Router()
  .post('/', (req, res, next) => {

  let from_email = new helper.Email('example@sendgrid.net');
  let to_email = new helper.Email('spyeadon@gmail.com');
  let subject = "SendGrid voice-connect test email2";
  // let content = new helper.Content("text/plain", "Test of audio file attachment");
  let contentFILE = {buffer: req.body.toString('hex')};
  let content = new helper.Content("application/octet-stream", contentFILE);

  let mail = new helper.Mail(from_email, subject, to_email, content);
  console.log("mail obj contents: ", mail.getContents());
  console.log("mail obj JSON: ", mail.toJSON());

  // mail.addAttachment({
  //   filename: 'recording-test.wav',
  //   contentType: 'audio/wav',
  //   content: contentFILE
  // });

  // let attachment = new helper.Attachment();
  // attachment.setContent(contentFILE);
  // attachment.setType('text/plain');
  // attachment.setFilename('my_file.txt');
  // attachment.setDisposition('attachment');
  // mail.addAttachment(attachment);

  //console.log("axios req body is: ", contentFILE);

  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

   sg.API(request)
    .then(response => {
      res.status(200).json(request);
      console.log("res status code: ", response.statusCode)
      // console.log("res body: ", response.body)
      // console.log("res headers: ", response.headers)
    })
    .catch(error => {
      console.log("Hey Soren! API err is: ", error.response.body);
    });
})
.get('/', (req, res, next) => {

  let from_email = new helper.Email('example@sendgrid.net');
  let to_email = new helper.Email('spyeadon@gmail.com');
  let subject = "SendGrid voice-connect test email";
  let content = new helper.Content("application/octet-stream", "Test of audio file attachment");

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
      // console.log("res body: ", response.body)
      // console.log("res headers: ", response.headers)
    })
    .catch(error => {
      console.log("Hey Soren! API err is: ", error.response.statusCode);
    });
})
