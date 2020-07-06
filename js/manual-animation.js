const buttons = document.querySelectorAll("button");
for(var i=0; i<buttons.length;i++) {
    buttons[i].addEventListener('click', 
        function() {
            var direction = event.target.id;
            animate = setInterval(function () {moveImage(direction); }, 60);
        });
    document.addEventListener('mouseup', function() {clearInterval(animate);}); 
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

    animate = setTimeout(function() {moveImage(direction)}, 20);
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}


window.onload = init;