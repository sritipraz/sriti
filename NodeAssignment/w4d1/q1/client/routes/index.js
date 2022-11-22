var express = require('express');
var router = express.Router();
const keyValue = require('../models/KeyValuePair')

/* GET home page. */
router.get('/', function (req, res, next) {
  let currentCookies = [];

  let jsonCookie = req.cookies;

  if (jsonCookie) {
    Object.entries(jsonCookie).forEach(
      ([key, value]) => {
        let kv = new keyValue(key, value);
        currentCookies.push(kv);
      });
  }


  res.render('index', { title: "Cookie Form", currentCookies: currentCookies });
});

router.post('/addCookie', (req, res) => {

  res.cookie(req.body.keyCookie, req.body.valueCookie);

  res.redirect("/")
})
module.exports = router;
