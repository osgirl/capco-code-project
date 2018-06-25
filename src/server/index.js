const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const icons = require('./assets/');
const cors = require('cors');

const app = express();

app.use(morgan('default'), helmet(), express.json(), cors());
app.get('/api/icons', (req, res) => {
  res.status(200).json({'data': icons})
});
app.listen(8000, () => console.log('Listening on port 8000...'))