const buttons = document.querySelectorAll("button");
let counter = 0;
//const buttons = document.querySelectorAll(".inputButton");
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
   // currentButton.addEventListener('click', ()=> moveImage(event.target.id))
   currentButton.addEventListener('click', function() { 
     direction = event.target.id;
     animate = setInterval(function() { moveImage(direction);}, 60);
    });
    currentButton.addEventListener('mouseup', function(){clearInterval(animate);});
    document.addEventListener('mouseup', function(){clearInterval(animate);});
    
    document.addEventListener('keyDown', function() { 
        //direction = event.target.id;
        direction = event.code;
        animate = setInterval(function() { moveImage(direction);}, 60);
       });
    document.addEventListener('keyup', function(){clearInterval(animate);});
    currentButton.addEventListener('keyup', function(){clearInterval(animate);});
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
    clearTimeout(animate);
    
    let imgObjStyle = imgObj.style;
    let imgObjStyleDirection;
    if(direction === 'KeyD') {        
        imgObjStyleDirection = imgObjStyle.left;
        //imgObjStyleDirection = parseInt(imgObjStyleDirection) + 10 + 'px';
        imgObjStyle.left = parseInt(imgObjStyleDirection) + 10 + 'px';
        //window.alert(imgObjStyleDirection);
    }

    if(direction === 'KeyA') {
        imgObjStyleDirection = imgObjStyle.left;
        imgObjStyle.left = parseInt(imgObjStyleDirection) - 10 + 'px';
    }

    if(direction === 'KeyW') {
        imgObjStyleDirection = imgObjStyle.top;
        imgObjStyle.top = parseInt(imgObjStyleDirection) - 10 + 'px';
    }

    
    if(direction === 'KeyS') {
        imgObjStyleDirection = imgObjStyle.top;
        imgObjStyle.top = parseInt(imgObjStyleDirection) + 10 + 'px';
    }
    animate = setInterval(function() { moveImage(direction);}, 60);
    counter += 60;
    if (counter > 3000){
        counter = 0;
        clearTimeout(animate);
    }
    //animate = setTimeout(function(){moveImage(direction)}, 20);
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}


window.onload = init;