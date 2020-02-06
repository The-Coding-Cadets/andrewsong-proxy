const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/styles', (req, res) => {
  res.sendFile(path.resolve('public/style.css'));
});

app.get('/images', (req, res) => {
  res.sendFile(path.resolve('client/dist/bundle.js'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));