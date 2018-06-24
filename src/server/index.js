const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');

app.use(morgan);
app.use(helmet);
app.use(express.static('dist'));

app.listen(8000, () => console.log('Listening on port 8000...'))