# Gemini Mail Responder

## 1. Description

`gemini-mail-responder` is an NPM package that allows you to send emails easily by leveraging AI to customize your message based on a prompt. It automatically generates the content of the email and sends it to the specified recipient.

## 2. How to Install

You can install the package using npm:

```bash
npm i gemini-mail-responder
```
## 3. How to Import and Call package

```javascript
import handleEmail from 'gemini-mail-responder';

handleEmail(
  'gemini api key',             // Your Gemini API key
  'your email',                 // The email address you are sending from
  'your email password',        // The password for your email account
  'prompt on which you want to send mail', // The prompt or topic for the email content
  'to whom you want to send mail' // The recipient's email address
);
```

