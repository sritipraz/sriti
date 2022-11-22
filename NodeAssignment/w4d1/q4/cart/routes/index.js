var express = require('express');
var router = express.Router();
const product = require('../model/product');
const shoppingCart=require('../model/shoppingCart')
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


/* GET home page. */
router.get('/', function(req, res, next) {
  let cart=[];
  req.session.cart=cart;
  res.render('index', { title: 'Products List',products:products });
});

router.post('/addToCart',(req,res)=>{
  console.log(req.body.id);
  let cart=[];
  
  let selectedInCart;
  let selectedProduct=req.body.id;
  if(req.session.cart)
    {
      cart=req.session.cart;
      selectedInCart=cart.filter(x=>x.id===selectedProduct)[0];
      console.log(cart);
      if(selectedInCart)
      {
       for(let ithItem in cart)
       {
          if(cart[ithItem].id===selectedProduct)
          {
            cart[ithItem].quantity+=1;
            let itemPrice=products.filter(x=>x.id==selectedProduct)[0].price;
            cart[ithItem].price=cart[ithItem].price+itemPrice;
          }

       }
       req.session.cart=cart;
      }
    }
    
      if(!selectedInCart)
      {
        let product=products.filter(x=>x.id==selectedProduct)[0];
        let c=new shoppingCart(product.id,product.name,product.price,1);
        cart.push(c);
        req.session.cart=cart;
      }
    
  res.render('shoppingCart', { title: 'Products List',cart:cart });
})

module.exports = router;
