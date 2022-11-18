const express = require('express');
const app = express();
const path=require('path');
const bodyparser=require("body-parser");
app.set('view engine','ejs');

const formScript=require('./node_script/form')

//app.use(express.urlencoded({extended:false}));
app.use(bodyparser.urlencoded({extended:false}))

//app.use('/javascript',express.static(path.join(__dirname,'public','script')))
app.use('/css',express.static(path.join(__dirname,'public','styling')));
app.get('/', (req, res) => {
    res.render('forms.ejs',{isDayTime:formScript.isDay()});
});


app.post('/result',  (req, res) => {
  res.redirect(`/output?name=${req.body.nameTxt}&age=${req.body.ageTxt}`)
});

app.get('/output',(req,res)=>{
  let name=req.query.name;
  let age=req.query.age;
  console.log(name);
  res.send(`Welcome ${name}. Age:${age}`);
});
app.listen(3000);