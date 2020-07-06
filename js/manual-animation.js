const buttons = document.querySelectorAll("button");
var count = 0;

for(var i=0; i<buttons.length;i++) {
    buttons[i].addEventListener('click', 
        function() {
            var direction = event.target.id;
            animate = setTimeout(function() {
                moveImage(direction);
                count += 20;
                if(count > 800) { //800 milliseconds so its easy to keep on screen
                    clearTimeout(animate);
                    count = 0;
                }
            }, 20);
        });
    document.addEventListener('mouseup', function() {clearInterval(animate);}); 
}

function moveImage(direction) {
    let imgObjStyle = imgObj.style;
    let topVal = parseInt(imgObjStyle.top, 10);
    let leftVal = parseInt(imgObjStyle.left, 10);

    if(direction === 'KeyA') {
        imgObjStyle.left = (leftVal - 10) + "px";
    } 

    if(direction === 'KeyW') {
        imgObjStyle.top = (topVal - 10) + "px";
    }

    if(direction === 'KeyD') {        
        imgObjStyle.left = (leftVal + 10) + "px";
    }

    
    if(direction === 'KeyS') {
        imgObjStyle.top = (topVal + 10) + "px";
    }

    animate = setTimeout(function() {
        moveImage(direction);
        count += 20;
        if(count > 800) {
            clearTimeout(animate);
            count = 0;
        }
    }, 20);
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '400px'; //didnt like it starting at top left
    imgObj.style.top = '400px';
}


window.onload = init;
document.addEventListener('keydown', function() {moveImage(event.code);} );