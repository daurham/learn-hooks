const express = require('express');
const path = require('path');
const APIData = require('./APIData.json');

const app = express();
const PORT = 3000;
const clientPath = path.join(__dirname, '../client/dist');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(clientPath));

// Data to manipulate
// const APIData = { data: 0 };

app.get('/', (req, res) => res.status(200).send(APIData));
app.patch('/', (req, res) => {
  // app.get('/', (req, res) => {
  APIData.data += (req.body.value || 1);
  // res.status(200).send(APIData);
  res.sendStatus(203);
});


app.listen(PORT, () => `Hosting -> https://localhost${PORT}`);
