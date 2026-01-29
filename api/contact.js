const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { name, email, phone, subject, message, botField } = req.body;

        // 🛑 1. Security: Honeypot Check
        if (botField) {
            console.warn('Bot detected via honeypot');
            return res.status(403).json({ error: 'Bot detected' });
        }

        // 🛑 2. Validation: Check required fields
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 📧 3. Configure Email Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 🚀 4. Send the Email
        await transporter.sendMail({
            from: `"Solar Website Contact" <${process.env.EMAIL_USER}>`,
            to: 'aaryanvidja31@gmail.com', // Recipient address
            replyTo: email,
            subject: `New Solar Inquiry: ${subject || 'No Subject'}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; color: #333;">
                    <h2 style="color: #2563eb;">New Contact Message</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <hr style="border: 0; border-top: 1px solid #eee;"/>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        return res.status(200).json({ success: true, message: 'Email sent successfully!' });

    } catch (error) {
        console.error('SERVER ERROR:', error);
        return res.status(500).json({ error: 'Failed to send email. Check server logs.' });
    }
}
