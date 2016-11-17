var bananaX = 250;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    bananaX -=15;
 document.getElementById("banana").setAttribute("y", bananaX)

  }
  else if(e.keyCode == 39){
        bananaX +=15;
 document.getElementById("banana").setAttribute("y", bananaX)
  }
})
