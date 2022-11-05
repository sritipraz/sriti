window.onload = function(){
    "use strict";
    
    let delayTime = 250;
    let animator;
    let textAreaValue;
    let onFrame;
    const animationOption = document.getElementById("animation");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const sizeOption = document.getElementById("fontsize");
    const speedCheckbox = document.getElementById("turbo");
    const textArea = document.getElementById("text-area");
    
    animationOption.onchange = onanimationOption;
    startButton.onclick = onStartClick;
    stopButton.onclick = onStopClick;
    sizeOption.onchange = onsizeOption;
    speedCheckbox.onchange = onSpeedSelector;

    function animation(){
        clearInterval(animator);
        onFrame = 0;
        let frame = textAreaValue.split("=====\n");
          animator = setInterval(nextFrame, delayTime,frame);
    }

    function nextFrame(frame)
    {
        textArea.value = frame[onFrame];
        onFrame++;
            if(onFrame == frame.length){
                onFrame = 0;
            }
    }

    function showSelected(){
       var selectedAnimation = animationOption.value;
       textAreaValue = ANIMATIONS[selectedAnimation];
       textArea.value = textAreaValue;
       
    }

    function onanimationOption(){
        showSelected();
    }

    function onStartClick(){
        startButton.disabled= true;
        animationOption.disabled = true;
        stopButton.disabled = false;
        animation();
    }

    function onStopClick(){
        startButton.disabled= false;
        animationOption.disabled = false;
        stopButton.disabled = true;
        clearInterval(animator);
        showSelected();
        
    }
   
    function onsizeOption(){
        const fontMap=new Map([
            ["Tiny",8],
            ["Small",10],
            ["Medium",12],
            ["Large",16],
            ["Extra Large",24],
            ["XXL",32]
        ]);
        var selectedValue = sizeOption.value;
        textArea.style.fontSize = fontMap.get(selectedValue)+"pt";
    }
    function onSpeedSelector(){
        if(speedCheckbox.checked){
            delayTime = 50;
        }else{
            delayTime = 250;
        }
        if(startButton.disabled){
            animation();
        }
    }

    
}