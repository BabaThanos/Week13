const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to the database');
});

app.get('/hello', (request, response) => {
    response.send("hello from lincoln") 
});
app.get('/', (request, response) => {
    response.send("Welcome to my express app") 
});

const PORT = 3000; 

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); 
});