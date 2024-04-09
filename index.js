const express = require('express');
const app = express();

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
