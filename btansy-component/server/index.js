const express = require('express');
const app = express();
const port = 3000;
const database = require('../database/index.js');
const path = require('path');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/img', (req, res) => {
  database.fetch(Number(req.query.id), (err, data)=>{
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.get('/styles', (req, res) => {
  res.sendFile(path.resolve('public/style.css'));
});

app.get('/images', (req, res) => {
  res.sendFile(path.resolve('client/dist/bundle.js'));
});

app.get('/white', (req, res) => {
  res.sendFile(path.resolve('public/white.png'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));