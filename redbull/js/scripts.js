/* MENU */

document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.querySelector(".menu-toggle");
    var menuList = document.querySelector(".menu");
  
    toggleButton.addEventListener("click", function() {
      menuList.classList.toggle("active");
    });
  });

/* INGREDIENTS */

function pokazOpis(nr) {
  var opis = document.getElementById('desc-' + nr);
  var wszystkieOpisy = document.getElementsByClassName('ingredients-desc');
  var x = 0;
  if(opis.style.display === 'none'){
    var x = 0;
  }else {
    var x = 1;
  }
  for (var i = 0; i < wszystkieOpisy.length; i++) {
    if (wszystkieOpisy[i].style.display === 'block') {
      wszystkieOpisy[i].style.display = 'none';
    }
  }

  if(x === 0){
    opis.style.display = 'block'
  }else {
    opis.style.display = 'none';
  }
}

/* ANIMATION */

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);