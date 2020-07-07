var animate
const buttons = document.querySelectorAll('button');

for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    currentButton.addEventListener('click', ()=> moveImage(event.target.id));
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
    let imgObjStyle = imgObj.style;
    let imgObjStyleDirection;

    if(direction === 'KeyD') {        
        imgObjStyleDirection = imgObjStyle.left;
        imgObjStyleDirection = parseInt(imgObjStyleDirection) + 10 + 'px';
        imgObjStyle.left = (leftVal + 30) + "px";
    }
    let topVal = parseInt(imgObjStyle.top, 10);
    let leftVal = parseInt(imgObjStyle.left, 10);

    if(direction === 'KeyA') {
        imgObjStyleDirection = imgObjStyle.left;
        imgObjStyleDirection = parseInt(imgObjStyleDirection) - 10 + 'px';
        imgObjStyle.left = (leftVal - 30) + "px";
    } 
    
    if(direction === 'KeyW') {
        imgObjStyleDirection = imgObjStyle.top;
        imgObjStyleDirection = parseInt(imgObjStyleDirection) - 10 + 'px';
        imgObjStyle.top = (topVal - 30) + "px";
    }

    if(direction === 'KeyS') {
        imgObjStyleDirection = imgObjStyle.top;
        imgObjStyleDirection = parseInt(imgObjStyleDirection) + 10 + 'px';
        imgObjStyle.top = (topVal + 30) + "px";
    }
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '30px';
    imgObj.style.top = '30px';
}


window.onload = init;