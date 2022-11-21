var express = require('express');
const product = require('../model/product');
var router = express.Router();

const bparser=require('body-parser');
router.use(bparser.urlencoded({extended:false}));

var cookieParser = require('cookie-parser');
router.use(cookieParser());

const products=[
  new product("woo-vneck-tee","V-Neck T-Shirt",100,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),
  new product("woo-hoodie","Hoodie",200,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),
  new product("woo-hoodie-with-logo","Hoodie with Logo",300,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),
  new product("woo-tshirt","T-Shirt",400,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),
  new product("woo-belt","Belt",500,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),
  new product("woo-cap","Cap",600,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),
  new product("woo-sunglasses","Sunglasses",700,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),
  new product("woo-hoodie-with-pocket","Hoodie with Pocket",800,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),
  new product("woo-hoodie-with-zipper","Hoodie with Zipper",900,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),
  new product("woo-long-sleeve-tee","Long Sleeve Tee",1000,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),

];
let cart=[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Products List',products:products });
});

router.post('/addToCart',(req,res)=>{
  console.log(req.body.id);
  
  let selectedProduct=req.body.id;
  let cartAddition=products.filter(x=>x.id==selectedProduct);
  cart=[...cart,...cartAddition];
  
  
  res.render('shoppingCart', { title: 'Products List',products:cart });
})

module.exports = router;
