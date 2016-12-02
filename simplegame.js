var bananaX = 250;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    bananaX -=15;
 document.getElementById("banana").setAttribute("x", bananaX)

  }
  else if(e.keyCode == 39){
        bananaX +=15;
 document.getElementById("banana").setAttribute("x", bananaX)
  }
})

var bananaY= 20;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 38){
    bananaY -=15;
 document.getElementById("banana").setAttribute("y", bananaY)

  }
  else if(e.keyCode == 40){
        bananaY +=15;
 document.getElementById("banana").setAttribute("y", bananaY)
  }
})

var foodX = Number(document.getElementById('Banana').getAttribute("x"))
var foodY = Number(document.getElementById('Banana').getAttribute("y"))

  if(bananaX > foodX && bananaX < foodX + 70 && bananaY > foodY && bananaY < foodY +70){
    var randX = randomNumber(0,800)
    document.getElementById("Banana").setAttribute("x", randX)
    foodEaten = foodEaten + 1
    document.getElementById("score").textContent = foodEaten
  }

if(foodEaten == 4){
  document.getElementById("screen").pauseAnimations()
  var timeStop = Date.now()
  var totalTime = timeStop - timeStart
}
