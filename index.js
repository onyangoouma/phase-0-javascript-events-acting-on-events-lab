
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "0px";

function moveDodgerLeft(){
    let left = dodger.style.left
    left = parseInt(left)
    if(left > 0){
        dodger.style.left = `${left-10}px`
    }
}
moveDodgerLeft()

function moveDodgerRight(){
    let left = dodger.style.left
    left = parseInt(left)
    dodger.style.left = `${left + 10}px`
}
moveDodgerRight()

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
