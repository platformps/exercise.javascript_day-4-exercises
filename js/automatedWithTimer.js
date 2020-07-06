var animate;
const buttons = document.querySelectorAll("button");
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('click', function(){ var direction=event.target.id ;
    animate = setInterval(function() {moveImage(direction);}, 60);});
    document.addEventListener('mouseup', function() {clearInterval(animate);}); 
    }     

function moveImage(direction) {
    let imgObjStyle = imgObj.style;
    //let imgObjStyleDirection;
    var topVal = parseInt(imgObjStyle.top, 10);
    var leftVal = parseInt(imgObjStyle.left, 10);

    if(direction === 'KeyD') {        
        // imgObjStyleDirection = imgObjStyle.left;
        // imgObjStyleDirection = parseInt(imgObjStyleDirection) + 10 + 'px';
        imgObjStyle.left = (leftVal + 30) + "px";
       
    }

    if(direction === 'KeyA') {
        //imgObjStyleDirection = imgObjStyle.left;
        //imgObjStyleDirection = parseInt(imgObjStyleDirection) - 10 + 'px';
        imgObjStyle.top = (topVal - 30) + "px";
    }

    if(direction === 'KeyW') {
        //imgObjStyleDirection = imgObjStyle.top;
        //imgObjStyleDirection = parseInt(imgObjStyleDirection) - 10 + 'px';
        imgObjStyle.left = (leftVal - 30) + "px";
    }

    
    if(direction === 'KeyS') {
        //imgObjStyleDirection = imgObjStyle.top;
        //imgObjStyleDirection = parseInt(imgObjStyleDirection) + 10 + 'px';
        imgObjStyle.top = (topVal + 30) + "px";
    }
    //animate.setTimeout(function(){moveImage(direction)},20);
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}


window.onload = init;

//function moveImage(direction) {
    //     if(direction ==='KeyD'){imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';};
    //     if(direction ==='KeyD'){imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';};
    //     if(direction ==='KeyD'){imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';};
    //     if(direction ==='KeyD'){imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';};
    //     animate = setTimeout(function(){moveImage(directiion)},20);
    //     }