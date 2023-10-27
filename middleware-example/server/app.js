const express = require('express');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Hello World!!!',
  });
});
app.get('/api/v1', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Basic Setup is done to implement all other logics!!!',
  });
});

module.exports = app;
