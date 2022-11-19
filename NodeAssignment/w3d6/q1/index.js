const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css',express.static(path.join(__dirname,'public','styling')));
app.get('/', (req, res) => {
 const date = new Date();
 //console.log(date.toTimeString());
 res.render("index", {
 time: date.toTimeString(),
 });
});
app.listen(3000);