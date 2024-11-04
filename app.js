const express = require('express'); // imports express mod
const path = require('path'); // to handle the file paths

const app = express(); // activates the express
const PORT = 3000; // it will show up on server 3000

// listed in public because it was the only way i could see the server
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// gets data from contact.html
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// for form submissions 
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // what i see in VS Code terminal when data is submitted in the local server
    console.log('Data recieved from server:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // what the user sees after you press submit on the form
    res.send('Thank you for leaving a message! Your submission was successful.');
});

// starts the server on the port that was defined
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});