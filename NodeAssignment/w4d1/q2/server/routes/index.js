var express = require('express');
var router = express.Router();
const formScript=require('../public/javascripts/form');



router.get('/', (req, res) => {
  let a=formScript.isDay();

    res.render('index.ejs',{isDayTime:a});
    //res.render('forms.ejs',{isDayTime:formScript()});
});


router.post('/result',  (req, res) => {
  req.session.name=req.body.nameTxt;
  req.session.age=req.body.ageTxt;
  console.log("Name:"+req.session.name);
  res.redirect(`/output`);//?name=${req.body.nameTxt}&age=${req.body.ageTxt}
});

router.get('/output',(req,res)=>{
  //if(req.session.name)
  let name=req.session.name;
  let age=req.session.age;
  console.log("Name:"+name);
  res.send(`Welcome ${name}. Age:${age}`);
})
module.exports = router;
