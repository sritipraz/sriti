$(eventhandler)

function eventhandler(){
    $('#ask').click(answer)

}

function answer(){
    
    fetch('/8ball',{
        method:'GET',
    })
    .then(res=>res.json())
    .then(response=>{setValue(response)})

    .catch(errorlog)
}

function setValue(textValue){
    console.log(textValue);
    $('#question').val(textValue);
}

function errorlog()
{
    console.log("error");
}