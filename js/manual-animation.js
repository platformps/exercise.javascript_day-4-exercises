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
    var imgObjStyle = imgObj.style;
    var topVal = parseInt(imgObjStyle.top, 10);
    var leftVal = parseInt(imgObjStyle.left, 10);

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

    document.addEventListener('keydown', function(e){
        if(e.key === 'w')
        console.log('hei w')
     })
}

function keyMoves(e) {
    var imgObjStyle = imgObj.style;
    var topVal = parseInt(imgObjStyle.top, 10);
    var leftVal = parseInt(imgObjStyle.left, 10);

    switch (e.key) {
        case 'a':
            imgObjStyle.left = (leftVal - 30) + "px";
            break;
        case 'w':
            imgObjStyle.top = (topVal - 30) + "px";
            break;
        case 'd':
            imgObjStyle.left = (leftVal + 30) + "px";
            break;
        case 's':
            imgObjStyle.top = (topVal + 30) + "px";
            break;
    
        default:
            break;
    }
    
}

function init() {
    document.addEventListener("keydown", keyMoves);
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}


window.onload = init;