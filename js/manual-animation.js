const buttons = document.querySelectorAll("button");
var animate;
var timer = 0;
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

document.addEventListener('mouseup',()=>{clearTimeout(animate);}) //click anywhere to stop moveImage
document.addEventListener('keydown',(event)=> {
  switch(event.keyCode){
    case 65: {
      moveImage('KeyA');
      break;
    }
    case 68: {
      moveImage('KeyD');
      break;
    }
    case 87: {
      moveImage('KeyW');
      break;
    }
    case 83: {
      moveImage('KeyS');
      break;
    }
  }

});

function moveImage(direction) {
    clearTimeout(animate);
    clearTimeout(timer);
    let imgObjStyle = imgObj.style;
    let imgObjStyleDirection;

    if(direction === 'KeyD') {        
        imgObjStyle.left = parseInt(imgObjStyle.left) + 10 + 'px';
    }

    else if(direction === 'KeyA') {
        imgObjStyle.left = parseInt(imgObjStyle.left) - 10 + 'px';
    }

    else if(direction === 'KeyW') {
        imgObjStyle.top = parseInt(imgObjStyle.top) - 10 + 'px';
    }

    else if(direction === 'KeyS') {
        imgObjStyle.top = parseInt(imgObjStyle.top) + 10 + 'px';
    }

    animate = setTimeout(() => { //every time set up animate timeout, timer var will accumulate
    timer += 20;  //every time press a key, the timeout will reinitiate
    moveImage(direction);
    if(timer > 1000) { //pass 1000 so that its stay in the boundary of browser
    clearTimeout(animate)
    timer = 0;
    }
    },20)

   
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}


window.onload = init;