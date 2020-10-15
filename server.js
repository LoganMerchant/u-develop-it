// Imports
const db = require('./db/database');
const express = require('express');

// Server variables
const PORT = process.env.PORT || 3001;
const app = express();

// Routings
const apiRoutes = require('./routes/apiRoutes');

// Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route usages
app.use('/api', apiRoutes);

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Start server after `db` connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}.`);
    });
});