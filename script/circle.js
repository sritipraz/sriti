window.onload = (function () {
    let width=50;
    let growInterval; 
    function start()
    {
        //alert("start");
        growInterval = setInterval(grow, 250);
    }
    function grow() {
        //alert("grow");
        const circle=document.getElementById("circle1");
        width=width+10
        circle.style.width=width+"px";
        circle.style.height=width+"px";
    }
    return start;
})();
