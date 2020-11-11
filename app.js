const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static("./public"));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/ecologia', (req, res) => {
  res.sendFile(__dirname + '/public/ecologia.html');
});

app.get('/LoT', (req, res) => {
  res.sendFile(__dirname + '/public/LoT.html');
});

app.get('/IA', (req, res) => {
  res.sendFile(__dirname + '/public/IA.html');
});

app.listen(port, () => {
  console.log('Server on port 3000');
});