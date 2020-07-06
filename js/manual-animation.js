const buttons = document.querySelectorAll("button");
for(var i=0; i<buttons.length;i++) {
    buttons[i].addEventListener('click', function() {moveImage(event.target.id);});
    document.addEventListener('mouseup', function() {}); 
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
    }

    if(direction === 'KeyA') {
        imgObjStyleDirection = imgObjStyle.left;
        imgObjStyleDirection = parseInt(imgObjStyleDirection) - 10 + 'px';
    }

    if(direction === 'KeyW') {
        imgObjStyleDirection = imgObjStyle.top;
        imgObjStyleDirection = parseInt(imgObjStyleDirection) - 10 + 'px';
    }

    
    if(direction === 'KeyS') {
        imgObjStyleDirection = imgObjStyle.top;
        imgObjStyleDirection = parseInt(imgObjStyleDirection) + 10 + 'px';
    }

    animate = setTimeout(function() {moveImage(direction)}, 20);
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}


window.onload = init;