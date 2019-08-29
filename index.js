const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.TARGET || 'World'}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
