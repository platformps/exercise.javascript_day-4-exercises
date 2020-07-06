var animate;
const buttons = document.querySelectorAll("button");
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('click', function(){ moveImage(event.target.id);});
    document.addEventListener('mouseup', function() {  });}
         

function moveImage(direction) {
        if(direction ==='KeyD'){imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';};
        if(direction ==='KeyW'){imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';};
        if(direction ==='KeyA'){imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';};
        if(direction ==='KeyS'){imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';};
        animate = setTimeout(function(){moveImage(direction)},20);
        }

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}


window.onload = init;