// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey('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');
const msg = {
  to: "mitchellcartwrightt@gmail.com",
  from: "mitch_mitch_w@hotmail.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail.send(msg);
