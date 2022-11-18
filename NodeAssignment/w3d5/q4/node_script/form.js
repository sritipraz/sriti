let isDayTime=function(){
    const date = new Date();
        const hour = date.getHours();
        
        if(hour>=6 && hour<=18)
        return true;
        else
        return false;

}

module.exports={isDay:isDayTime};
