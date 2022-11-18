const express = require('express');
const app = express();
const path=require('path');
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));
//app.use('/javascript',express.static(path.join(__dirname,'public','script')))
app.get('/', (req, res) => {
    res.render('forms');
});


app.post('/',  (req, res) => {
  res.send(`Welcome ${req.body.nameTxt}. Age:${req.body.ageTxt}`);
});
app.listen(3000);