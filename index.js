const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Developer Api Running');
});

app.listen (port, () => {
    console.log('Wevloper School Running on port', port);
});