var animate;
const buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {

    let currentButton = buttons[i];
    currentButton.addEventListener('click', () => {
        var direction = event.target.id;
        let start = Date.now();

        animate = setInterval(function () {
            moveImage(direction);

            let timepassed = Date.now() - start;
            if (timepassed >= 3000) {
                clearInterval(animate);
            }

        }, 100);

    });
    // animateStop = setTimeout(() => { clearInterval(animate); }, 3000);

    document.addEventListener('mouseup', function () { clearInterval(animate); });


}
document.addEventListener('keydown', () => moveImage(event.code));

function moveImage(direction) {
    let imgObjStyle = imgObj.style;
    let topVal = parseInt(imgObjStyle.top, 10);
    let leftVal = parseInt(imgObjStyle.left, 10);





    if (direction === 'KeyA') {
        imgObjStyle.left = (leftVal - 30) + "px";
    }

    if (direction === 'KeyW') {
        imgObjStyle.top = (topVal - 30) + "px";
    }

    if (direction === 'KeyD') {
        imgObjStyle.left = (leftVal + 30) + "px";
    }


    if (direction === 'KeyS') {
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