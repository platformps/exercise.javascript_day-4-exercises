const buttons = document.querySelectorAll("button");

var animate;
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('click', () =>
    { 
      var direction = event.target.id;
      animate = setInterval( function() {moveImage(direction); }, 60);
    });
    //document.addEventListener('mouseup', function() { clearInterval(animate);});
}

document.addEventListener('mouseup', function() { clearInterval(animate);});


var keycode;
document.addEventListener('keydown', function(e) {

  if (window.event) {
    keycode = window.event.keyCode;
    console.log(keycode);
  }
  else if (e) {
    keycode = e.which;
  }
  clearInterval(animate);
  animate = setInterval (function() {moveImage2(keycode); }, 60);
});

function moveImage2(keycode) {
    let imgObjStyle = imgObj.style;
    let topVal = parseInt(imgObjStyle.top, 10);
    let leftVal = parseInt(imgObjStyle.left, 10);

    if(keycode == 37) { //left arrow
        imgObjStyle.left = (leftVal - 30) + "px";
    } 

    if(keycode == 38) { //up arrow
        imgObjStyle.top = (topVal - 30) + "px";
    }

    if(keycode == 39) { //right arrow     
        imgObjStyle.left = (leftVal + 30) + "px";
    }
    
    if(keycode == 40 ) { //down arrow
        imgObjStyle.top = (topVal + 30) + "px";
    }
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

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}


window.onload = init;