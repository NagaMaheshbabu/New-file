let div = document.getElementById('div');
let btns = div.getElementsByClassName('plans');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    for (var j = 0; j < btns.length; j++) {
      btns[j].dataset.active = "inactive";
     console.log(btns[j])
    }
    if (this.dataset.active == "active") {
      this.dataset.active = "inactive";
      
    } else {
      this.dataset.active = "active";
      
    }
  })
}