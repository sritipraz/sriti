$(eventHandler);

function eventHandler(){

    $('#addToCart').click(add)

}


function add(){
    
    console.log("adding to cart");
    let productId=$('#item').val();
    let json={
        id:productId
    }
    console.log(json);
    $.ajax('/addToCart',{
        "type":"POST",
        "body":json
    })
 .done(response => { //response will be a JSON object
    console.log("done");
 console.log(response);
 console.log(JSON.stringify(response));
 
 })
 .fail(()=>{console.log("failed to add to cart")});
}