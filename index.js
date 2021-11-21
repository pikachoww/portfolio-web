/imports
const express = require('express');
const fs = require('fs');
var path = require('path');
//constants
const app = express();
//make the port
const port = 3000;
// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

app.get('/',function (req, res) {
res.render('pages/home')
});
app.listen(port, () => console.log(`Portfolio Site Running on port ${port}!`));
