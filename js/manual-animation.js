init();

var imgObj;
var animate;
var directions;

const buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  let currentButton = buttons[i];

  currentButton.addEventListener("click", function() {
    var direction = event.target.id;
    animate = setInterval(function() {
      moveImage(direction);
    }, 60);
  });
  setInterval(function() {
    clearInterval(animate);
  }, 3000);
}

document.addEventListener("mouseup", function() {
  clearInterval(animate);
});

document.addEventListener("keypress", function() {
  direction = event.code;
  moveImage(direction);
});

function moveImage(direction) {
  let imgObjStyle = imgObj.style;
  let topVal = parseInt(imgObjStyle.top, 10);
  let leftVal = parseInt(imgObjStyle.left, 10);

  if (direction === "KeyA") {
    imgObjStyle.left = leftVal - 10 + "px";
  }

  if (direction === "KeyW") {
    imgObjStyle.top = topVal - 10 + "px";
  }

  if (direction === "KeyD") {
    imgObjStyle.left = leftVal + 10 + "px";
  }

  if (direction === "KeyS") {
    imgObjStyle.top = topVal + 10 + "px";
  }
}

function init() {
  imgObj = document.getElementById("myImage");
  imgObj.style.position = "relative";
  imgObj.style.left = "0px";
  imgObj.style.top = "0px";
}
