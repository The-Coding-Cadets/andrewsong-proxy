const express = require('express');
const app = express();
const port = 3003;


app.use(express.static(__dirname+'/../public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => {
  console.log(`proxy listening on port ${port}`);
});
