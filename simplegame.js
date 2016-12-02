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

if(bananaX > pancakesX && bananaX < pancakesX + 70 && pancakesY > pancakesY && bananaY < pancakesY +70){
   var randX = randomNumber(0,800)
   document.getElementById("banana").setAttribute("x", randX)
   foodEaten = foodEaten + 1
   document.getElementById("score").textContent = foodEaten
 }
})
