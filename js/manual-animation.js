const buttons = document.querySelectorAll("button");
var animate;

document.addEventListener('keypress', 
    function() {
        var direction = event;
        animate = setInterval(function () { moveImageFromKeyboard(direction);}, 3000);
    });
document.addEventListener('mouseup', function() { clearInterval(animate)});

for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    currentButton.addEventListener('click',
        function() {
            var direction = event.target.id;
            animate = setInterval(function () { moveImage(direction);}, 30);
        });
    document.addEventListener('mouseup', function() { clearInterval(animate);});
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

function moveImageFromKeyboard(event) {

    let imgObjStyle = imgObj.style;
    let topVal = parseInt(imgObjStyle.top, 10);
    let leftVal = parseInt(imgObjStyle.left, 10);

    if(event.key === 'a') {
        imgObjStyle.left = (leftVal - 30) + "px";
    } 

    if(event.key === 'w') {
        imgObjStyle.top = (topVal - 30) + "px";
    }

    if(event.key === 'd') {        
        imgObjStyle.left = (leftVal + 30) + "px";
    }

    
    if(event.key === 's') {
        imgObjStyle.top = (topVal + 30) + "px";
    }

}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
};

window.onload = init;