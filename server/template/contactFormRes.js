const contactUsEmail = (name, email, phone, message = '') => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Healthcare Inquiry Received</title>
  <style>
    body {
      background-color: #f9f9f9;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 20px;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background-color: #fff;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
    }
    .header h2 {
      margin: 0;
      color: #2a7de1;
    }
    .body {
      font-size: 16px;
      line-height: 1.6;
    }
    .info {
      background-color: #f1f7ff;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }
    .info p {
      margin: 8px 0;
    }
    .label {
      font-weight: 600;
      color: #444;
    }
    .footer {
      margin-top: 30px;
      font-size: 14px;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Healthcare Inquiry</h2>
    </div>
    <div class="body">
      <p>Hello <strong>Admin</strong>,</p>
      <p>You have received a new inquiry with the following details:</p>

      <div class="info">
        <p><span class="label">Name:</span> ${name}</p>
        <p><span class="label">Email:</span> ${email}</p>
        <p><span class="label">Phone:</span> ${phone}</p>
        ${message
            ? `<p><span class="label">Message:</span> ${message}</p>`
            : ""
        }
      </div>

      <p>Please review and respond accordingly.</p>
    </div>
    <div class="footer">
      This is an automated email — please do not reply.
    </div>
  </div>
</body>
</html>`;
};

module.exports = { contactUsEmail };
