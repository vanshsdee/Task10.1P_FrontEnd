const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));

// Inline configuration
const SENDGRID_API_KEY = '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'; 
const PORT = 5001;  
// SendGrid API Key Configuration
sgMail.setApiKey(SENDGRID_API_KEY);

// Sample route
// app.get('/api/test', (req, res) => {
//     res.json({ message: 'Hello from the backend!' });
// });

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'src', 'components', 'Header.js'));
});

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    const msg = {
        to: email,
        from: 'vansh4822.be23@chitkara.edu.in',
        subject: 'Welcome to Development centre of Deakin!',
        // text: `Hello! Welcome to DEV@Deakin!`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #2c3e50; text-align: center;">Hello! Welcome to DEV@Deakin!</h1>
                <p style="color: #7f8c8d; font-size: 16px;">Thank you for subscribing to our newsletter! We're excited to have you join our community of coding enthusiast.</p>
                <p style="color: #7f8c8d; font-size: 16px;">You'll now receive updates about:</p>
                <ul style="color: #7f8c8d; font-size: 16px;">
                    <li>Latest technological updates</li>
                    <li>Courses on AI and Machine Learning</li>
                    <li>Community events and workshops where you can meet tech entrepreneurs</li>
                    <li>Internship opportunities at top tech companies</li>
                </ul>
                <p style="color: #7f8c8d; font-size: 16px;">Stay tuned for our upcoming newsletters!</p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="https://www.youtube.com" style="background-color: #3498db; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
                </div>
            </div>
        `
    };

    try {
        await sgMail.send(msg);
        res.json({ success: true, message: 'Welcome email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error.response ? error.response.body : error);
        res.status(500).json({ success: false, message: 'Error sending welcome email' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
