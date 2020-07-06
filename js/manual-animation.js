const buttons = document.querySelectorAll("button");
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    currentButton.addEventListener('click', ()=> moveImage(event.target.id));
}

function checkKeydown(e){
  //  if(e.keyCode == 13){
    if(e.keyCode === 87) {
        imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
    }
    
    if(e.keyCode === 65) {
        imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
    }
    if(e.keyCode === 68) {        
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    }

    if(e.keyCode === 83) {
        imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
    }
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
    if(direction === 'KeyW') {
        imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
    }
    
    if(direction === 'KeyA') {
        imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
    }
    if(direction === 'KeyD') {        
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    }

    if(direction === 'KeyS') {
        imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
    }
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
    document.addEventListener("keydown", checkKeydown);
}


window.onload = init;
