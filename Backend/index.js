const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows parsing of JSON bodies

// Basic Health Check Route
app.get('/', (req, res) => {
  res.json({ message: 'Rachana Aluminium Backend is running!' });
});

// Inquiry Form Submission Route
app.post('/api/inquiries', (req, res) => {
  const { name, phone, email, location, message } = req.body;

  // Validate required fields
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and Phone are required fields.' });
  }

  // TODO: Connect to an email service or database here
  
  // Log the submission to the terminal
  console.log('\n--- New Inquiry Received ---');
  console.log(`Name:     ${name}`);
  console.log(`Phone:    ${phone}`);
  console.log(`Email:    ${email || 'N/A'}`);
  console.log(`Location: ${location || 'N/A'}`);
  console.log(`Message:  ${message || 'N/A'}`);
  console.log('----------------------------\n');

  // Send a success response
  res.status(200).json({ success: true, message: 'Inquiry received successfully!' });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
