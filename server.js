const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
} else {
  app.use(express.static(__dirname + 'client/public'));
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/public/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
