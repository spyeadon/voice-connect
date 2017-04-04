# Voice-Connect

Web app that allows the user to record a voice message, and attach it to an email sent with the subject line, from address, body content, and recipient of your choosing. Run the server using "npm run dev" in the project main directory.

  * [Presentation](https://www.youtube.com/watch?v=AmPU2Fm_grM&t=5s)

## Technologies Used

This project required 2 main components
  * An audio recording framework to capture audio input on the browser
  * An email server that could send messages with audio attached to them

For this project I chose...

### RecordRTC Audio Library
  * [RecordRTC](http://recordrtc.org/RecordRTC.html)
  * Text and audio data is captured on the browser and sent to the web server via axios.

### SendGrid Email API
  * [SendGrid](https://sendgrid.com/docs/index.html)
  * The audio file is attached to the email message as a base64 encoded string

### Flow of Data
  * Audio and text is sent to the web server as a base64 encoded string and attached to the email message sent to the SendGrid server, which finally sends it through to the correct email recipient

### Other Tools
  * This project uses Fullstack Academy's bones Node.js template, which uses Express.js, Sequelize and React Redux.
