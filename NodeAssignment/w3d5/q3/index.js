const express = require('express');
const app = express();
const path=require('path');
app.set('view engine','ejs');

const formScript=require('./node_script/form')

app.use(express.urlencoded({extended:false}));
//app.use('/javascript',express.static(path.join(__dirname,'public','script')))
app.use('/css',express.static(path.join(__dirname,'public','styling')));
app.get('/', (req, res) => {
    res.render('forms',{isDayTime:formScript.isDay()});
});


app.post('/',  (req, res) => {
  res.send(`Welcome ${req.body.nameTxt}. Age:${req.body.ageTxt}`);
});
app.listen(3000);