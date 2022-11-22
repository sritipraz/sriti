let shoppingCart = class {
    constructor(id,name, price,quantity) {
        this.id=id;
        this.name = name;
        this.price = price;
        this.quantity=quantity;

    }
    setPrice(price)
    {
        this.price=price;
    }
    setQuantity(quanity){
        this.quantity=quantity;
    }
}

module.exports=shoppingCart;