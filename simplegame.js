var bananaX = 250:
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    pugX -=15;
 document.getElementById("banana").setAttribute("y", bananaX)

  }
  else if(e.keyCode == 39){
        pugX +=15;
 document.getElementById("banana").setAttribute("y", bananaX)
  }
})
