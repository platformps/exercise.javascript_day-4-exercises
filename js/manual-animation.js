const buttons = document.querySelectorAll("button");
var animate;
var time=0;
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));    //changes to coral with function
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target)); //changes to white using back to normal function
    currentButton.addEventListener('click', ()=> moveImage(event.target.id))    //uses function moveImage to move the image.
}

function changeToCoral(eventTarget) {
    eventTarget.style.backgroundColor = "coral";
}

function changeToWhite() {
    eventTarget.style.backgroundColor = "white";
}

function backToNormal(eventTarget) {
    eventTarget.style.backgroundColor='';
}

function moveImage(direction) {
    clearTimeout(animate);
    // clearTimeout(time)
    let imgObjStyle = imgObj.style;
    let topVal = parseInt(imgObjStyle.top, 10);
    let leftVal = parseInt(imgObjStyle.left, 10);

    if(direction === 'KeyA') {
        imgObjStyle.left = (leftVal - 30) + "px";
    } 

    if(direction === 'KeyW') {
        imgObjStyle.top = (topVal - 30) + "px";
    }

    if(direction === 'KeyD') {        
        imgObjStyle.left = (leftVal + 30) + "px";
    }

    
    if(direction === 'KeyS') {
        imgObjStyle.top = (topVal + 30) + "px";
    }
    animate=setTimeout(function(){time += 10;moveImage(direction);
        if(time>100){clearTimeout(animate);time=0;}},200);
}
document.addEventListener('mouseup',()=>{clearTimeout(animate);})
document.addEventListener('keydown',(event)=>{
    switch(event.keyCode){
        case 65:{
            moveImage('KeyA')   ///left
            break;
        }
        case 68:{
            moveImage('KeyD')   //right
            break;
        }
        case 87: {
            moveImage('keyW')   //up
            break;
        }
        case 83: {
            moveImage("KeyS")   //down
            break;
        }

    }
})

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';

}


window.onload = init;