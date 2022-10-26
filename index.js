const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('Developer Api Running');
});

app.get('/card-categories', (req, res) =>{
    res.send(categories)
});

app.listen (port, () => {
    console.log('Wevloper School Running on port', port);
});