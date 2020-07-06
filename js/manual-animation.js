const buttons = document.querySelectorAll('button');
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('keydown' ,() =>{
        changeToCoral(event.code);
        moveImage(event.code);
    });
    currentButton.addEventListener('keyup' ,() =>{
        backToNormal(event.code);
    });
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    currentButton.addEventListener('click', () => moveImage(event.target.id))
}

function changeToCoral(eventTarget) {
    eventTarget.style.backgroundColor = "coral";
}

function changeToWhite(eventTarget) {
    eventTarget.style.backgroundColor = "white";
}

function backToNormal(eventTarget) {
    eventTarget.style.backgroundColor='';
}

function moveImage(direction) {
    let imgObjStyle = imgObj.style;
    var topVal = parseInt(imgObjStyle.top, 10);
    var leftVal = parseInt(imgObjStyle.left, 10);

    if(direction === 'KeyD') {        
        imgObjStyle.left = (leftVal + 30) + "px";
    }

    if(direction === 'KeyA') {
        imgObjStyle.left = (leftVal - 30) + "px";
    }

    if(direction === 'KeyW') {
        imgObjStyle.top = (topVal - 30) + "px";
    }

    
    if(direction === 'KeyS') {
        imgObjStyle.top = (topVal + 30) + "px";
    }
    var animate = setTimeout(function(){moveImage(direction)}, 20);
}

function init() {

    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
    document.addEventListener('keydown', () => {
        changeToCoral(document.getElementById(event.code));
        moveImage(event.code);
    });
    document.addEventListener('keyup', () =>{
        backToNormal(document.getElementById(event.code))
    });
}



window.onload = init;