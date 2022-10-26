const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use (cors());

const categories = require('./data/categories.json');
const card = require('./data/card.json');

app.get('/', (req, res) => {
    res.send('Developer Api Running');
});

app.get('/card-categories', (req, res) =>{
    res.send(categories)
});

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    const allCard = card.filter(n=> n.category_id === id);
    res.send(allCard);
});

app.listen (port, () => {
    console.log('Wevloper School Running on port', port);
});