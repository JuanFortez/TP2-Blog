var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("active");
    } else {
      panel.style.maxHeight = "180px";
      panel.classList.add("active");
    }
  });
}