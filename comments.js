// Create web server
// require express
const express = require('express');
const app = express();
// require body-parser
const bodyParser = require('body-parser');
// require comments.js
const comments = require('./comments.js');
// require cors
const cors = require('cors');
// use cors
app.use(cors());
// use body-parser
app.use(bodyParser.json());
// use comments.js
app.use('/comments', comments);
// listen to port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});