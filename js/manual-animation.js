const buttons = document.querySelectorAll("button");
let animate;
let counter = 0;
for(let i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    currentButton.addEventListener('click', ()=>  {moveImage(event.target.id)

    animate = setInterval(() => {
    moveImage(currentButton.id)
    counter+=1000
    console.log(counter)
    if (counter > 3000) {
        clearInterval(animate)
        counter = 0;
         }
    }, 1000);
})
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
}


function keyMoves(e) {
    let imgObjStyle = imgObj.style;
    let topVal = parseInt(imgObjStyle.top, 10);
    let leftVal = parseInt(imgObjStyle.left, 10);

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