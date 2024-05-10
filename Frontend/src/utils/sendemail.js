// sendEmail.js
import sgMail from "@sendgrid/mail";

// Set SendGrid API key from environment variable
sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

// Function to send email
const sendEmail = async (recipient, subject, body, from) => {
  const msg = {
    to: recipient,
    from: from, // Change this to your email address
    subject: subject,
    text: body,
    html: body, // You can also send HTML content
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
