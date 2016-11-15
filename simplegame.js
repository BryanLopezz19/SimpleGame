var bananax = Number(document.getElementById("banana").getAttribute("x"));
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {
    document.getElementById("banana").setAttribute("x",bananax-10)
  bananax = bananax-10
 }
 else if (e.keyCode == 39){
   document.getElementById("banana").setAttribute("x",bananax+10)
  bananax = bananax+10
 }

})
