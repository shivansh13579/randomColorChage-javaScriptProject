const randomColor = function(){
    const hex = '0123456789abcdef';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)] 
    }
    return color;
};

let intervalsId;

const startChangingColor = function(){
    if(!intervalsId){
   intervalsId = setInterval(changeBgColor,1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    };
};

const stopChangingColor = function(){
    // console.log('ram');
     clearInterval(intervalsId);
     intervalsId = null;
};

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)