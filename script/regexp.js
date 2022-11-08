window.onload=eventHandler

function eventHandler(){
    const submitButton=document.getElementById("submit-button");
    
    submitButton.onclick= submitClicked;
    
}

function submitClicked()
{
    const urlTextbox=document.getElementById("url");
    let urlPattern="^(http://|https://)+(\w|\W)?";
    if(urlTextbox.value.match(urlPattern))
    {
        alert("URL Accepted");
    }
    else{
        alert("URL not Accepted");
    }
    const passwordTextbox=document.getElementById("password");
    let pattern=  "([A-Z]{1,})([0-9]{1,})+(\w|\W)?";
    // "([A-Z]{1,})([0-9]{1,})+(\w|\W)?{10,}"
    var pass=passwordTextbox.value;
    if(pass.match(pattern))
    {alert("Password Accepted");}
    else{alert("Password Not Accepted");}
}