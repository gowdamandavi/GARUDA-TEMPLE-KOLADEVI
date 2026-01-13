const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'bookings.json');

function readBookings() {
    try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); } catch (e) { return []; }
}

function writeBookings(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.post('/api/bookings', (req, res) => {
    const { name, phone, sevaId } = req.body;
    if (!name || !phone) return res.status(400).json({ error: 'missing' });
    const bookings = readBookings();
    const id = Date.now();
    bookings.push({ id, name, phone, sevaId, createdAt: new Date().toISOString() });
    writeBookings(bookings);
    res.status(201).json({ id });
});

app.get('/api/bookings', (req, res) => {
    res.json(readBookings());
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Bookings API listening on ${PORT}`));