const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Configure your email transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',
        subject: 'Portfolio Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email.');
        } else {
            res.status(200).send('Email sent: ' + info.response);
        }
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
