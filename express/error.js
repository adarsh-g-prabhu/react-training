const express = require('express');
const app = express();

app.get('/', (req, res) => {
  throw new Error('An error occurred ');
});


app.get('/user', (req, res) => {
  res.send('Hi user');
});

app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('some error happened')
});

app.listen(3002);
