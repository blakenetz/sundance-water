const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config()

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(favicon(path.join(__dirname, 'dist/images/favicons', 'favicon.ico')));
app.set('views', path.join(__dirname, 'dist'));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  }
});

app.post('/send', (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.TO_EMAIL,
    subject: `new water lead!!! ${req.body.name}`,
    text: `New Lead!...
      Name: ${req.body.name}...
      City: ${req.body.city}...
      Email: ${req.body.email}...
      Phone: ${req.body.phone}...
      Reference: ${req.body.reference}...
      More reference info (if provided): ${req.body.referenceOther}...
      Product they're interested in: ${req.body.product}...
      Comments: ${req.body.comments}
    `,
    html: `<strong>Awwww yeah!</strong>
      <br />
      <p>You just got a fancy new lead. Go sell their pants off!</p>
      <br />
      <ul>
        <li><strong>Name:</strong> ${req.body.name}</li>
        <li><strong>City:</strong> ${req.body.city}</li>
        <li></li>
        <li><strong>Email:</strong> ${req.body.email}</li>
        <li><strong>Phone:</strong> ${req.body.phone}</li>
        <li></li>
        <li><strong>Reference:</strong> ${req.body.reference}</li>
        <li><strong>More reference info (if provided):</strong> ${req.body.referenceOther}</li>
        <li></li>
        <li><strong>Product they're interested in:</strong> ${req.body.product}</li>
        <li><strong>Comments:</strong> ${req.body.comments}</li>
      </ul><br />

      <p>Welp, that's all she wrote. Good Luck!</p><br />
    `
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      const message = `fail! ${err} \n`
      fs.writeFileSync('emaillog.txt', message, {flag: 'a+'})
      res.json({success:false })
    }
    else {
      const message = `success! ${info.stringify()} \n`
      fs.writeFileSync('emaillog.txt', message, {flag: 'a+'})
      res.json({success:true})
    }
  });
})

app.all('*', (req, res, next) => {
  res.sendFile('index.html', {
      root: __dirname + '/dist/'
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
