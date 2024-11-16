const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(express.static(__dirname)); // Serve static files
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit-contact', (req, res) => {
    const { name, mobile, email, interest, aadhar, pan } = req.body;

    // Debugging line to log the received form data
    console.log('Form Data:', req.body);

    // Check for missing required fields
    if (!name || !mobile || !email) {
        return res.status(400).send('Name, Mobile, and Email are required.');
    }

    // Open SQLite database (contact.db)
    const db = new sqlite3.Database('contact.db', (err) => {
        if (err) {
            console.error('Error opening database:', err.message);
            return res.status(500).send('Database error');
        }
    });

    // Insert the contact data into the database
    const query = `
        INSERT INTO contacts (name, mobile, email, interest, aadhar, pan)
        VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(query, [name, mobile, email, interest, aadhar, pan], function(err) {
        if (err) {
            console.error('Error inserting data:', err.message);
            return res.status(500).send('Error inserting data');
        } else {
            console.log('Data inserted successfully, ID:', this.lastID);
            // Sending a simple success response message
            return res.send('Submitted');
        }
    });

    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
