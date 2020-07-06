const buttons = document.querySelectorAll("button");
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    currentButton.addEventListener('click', ()=> moveImage(event.target.id))
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
        
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    }

    if(direction === 'KeyA') {
        imgObjStyle.left = parseInt(imgObj.style.left) - 10 + 'px';
    }

    if(direction === 'KeyW') {
  
        imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
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
}


window.onload = init;