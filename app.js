const express = require('express');

//express app
const app = express() //instantiate

// listen for requests
app.listen(3000);

// routing

app.get('/', (req, res) => {
  res.send('<h1> The Boys by ERIC KRIPKE </h1>'); //automatically infers Content-Type, status codes etc.
});

app.get('/one', (req, res) => {
  res.sendFile('./views/9_1.html', { root: __dirname });
});

app.get('/two', (req, res) => {
  res.sendFile('./views/9_2.html', { root: __dirname });
});
