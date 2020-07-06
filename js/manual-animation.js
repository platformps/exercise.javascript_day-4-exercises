const buttons = document.querySelectorAll("button");


function changeToCoral(eventTarget) {
    eventTarget.style.backgroundColor = "coral";
}

function changeToWhite() {
    eventTarget.style.backgroundColor = "white";
}

function backToNormal(eventTarget) {
    eventTarget.style.backgroundColor = '';
}

const AMOUNT_TO_MOVE = 10;
var LAST_MOUSE_PRESS = null;

function moveImage(direction) {
    console.log("KEYCODE: "+direction);
    if(LAST_MOUSE_PRESS != null){
        console.log(Date.now() - LAST_MOUSE_PRESS > 3000);
        if(Date.now() - LAST_MOUSE_PRESS > 3000){
            return;
        }
    }
    LAST_MOUSE_PRESS = Date.now();
    let imgObjStyle = imgObj.style;
    var topVal = parseInt(imgObjStyle.top, 10);
    var leftVal = parseInt(imgObjStyle.left, 10);

    //https://stackoverflow.com/questions/5484578/how-to-get-document-height-and-width-without-using-jquery
    let documentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let documentHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (direction == 'KeyD') {
        let newValue = (leftVal + AMOUNT_TO_MOVE);
        if(newValue < documentWidth){
            imgObjStyle.left = (leftVal + AMOUNT_TO_MOVE) + "px";
        }
    }

    if (direction == 'KeyA') {
        let newValue = (leftVal - AMOUNT_TO_MOVE);
        if(newValue > 0){
            imgObjStyle.left = (leftVal - AMOUNT_TO_MOVE) + "px";
        }
    }

    if (direction == 'KeyW') {
        let newValue = (topVal - AMOUNT_TO_MOVE);
        if(newValue > 0){
            imgObjStyle.top = (topVal - AMOUNT_TO_MOVE) + "px";
        }
    }

    if (direction == 'KeyS') {
        let newValue = (topVal + AMOUNT_TO_MOVE);
        if(newValue > 0){
            imgObjStyle.top = (topVal + AMOUNT_TO_MOVE) + "px";
        }
    }
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';

    for (var i = 0; i < buttons.length; i++) {
        let currentButton = buttons[i];
        currentButton.addEventListener('mouseenter', (event) => changeToCoral(event.target));
        currentButton.addEventListener('mouseleave', (event) => backToNormal(event.target));
        currentButton.addEventListener('click', (event) => moveImage(event.target.code))
        document.addEventListener('keyup', (keyup) => {
            moveImage(new String(keyup.code));
        });
    }
}


window.onload = init;