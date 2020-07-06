const buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    currentButton.addEventListener('click', () => moveImage(event.target.id))
}

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

function moveImage(direction) {
    let imgObjStyle = imgObj.style;
    var topVal = parseInt(imgObjStyle.top, 10);
    var leftVal = parseInt(imgObjStyle.left, 10);
    let documentHeight = document.body.clientHeight;
    let documentWidth = document.body.clientWidth;

    if (direction === 'KeyD') {
        let newValue = (leftVal + AMOUNT_TO_MOVE);
        console.log(newValue);
        console.log(documentHeight);
        if(newValue < documentHeight){
            imgObjStyle.left = (leftVal + AMOUNT_TO_MOVE) + "px";
        }
    }

    if (direction === 'KeyA') {
        let newValue = (leftVal - AMOUNT_TO_MOVE);
        console.log(newValue);
        if(newValue > 0){
            imgObjStyle.left = (leftVal - AMOUNT_TO_MOVE) + "px";
        }
    }

    if (direction === 'KeyW') {
        let newValue = (topVal - AMOUNT_TO_MOVE);
        console.log(newValue);
        if(newValue > 0){
            imgObjStyle.top = (topVal - AMOUNT_TO_MOVE) + "px";
        }
    }

    if (direction === 'KeyS') {
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
}


window.onload = init;