// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';
import { GoogleGenerativeAI } from '@google/generative-ai';
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// Function to generate a response using Gemini
async function generateResponse(geminiApiKey, emailContent) {
  try {
    const genAI = new GoogleGenerativeAI(geminiApiKey);

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = emailContent;
    var response = await model.generateContent(prompt);
    const result = await response.response;
    const text = result.text();

    console.log(text);
    return text;
  } catch (error) {
    console.error('Error generating response:', error);
    throw new Error('Failed to generate email response');
  }
}

// Function to send an email using nodemailer
async function sendEmail(to, subject, text, emailUser, emailPass) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  let mailOptions = {
    from: emailUser,
    to: to,
    subject: subject,
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Main function to handle the process
export default async function handleEmail(
  geminiApiKey,
  emailUser,
  emailPass,
  emailContent,
  recipient
) {
  try {
    const response = await generateResponse(geminiApiKey, emailContent);

    await sendEmail(
      recipient,
      'Response from AI',
      response,
      emailUser,
      emailPass
    );
  } catch (error) {
    console.error('Error handling email:', error);
  }
}

// module.exports = handleEmail;
// module.exports = handleEmail;
