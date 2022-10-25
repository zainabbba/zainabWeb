let sidemenu = document.getElementsByClassName('sidemenu')[0]


function openmenu() {
  sidemenu.style.right = '0'
  console.log('hello');
}

function closemenu() {
  sidemenu.style.right = '-200px'
}



let menu = document.querySelectorAll("header nav a");



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

function revealheading() {
  let reavealheading = document.querySelector('.reavealheading')


  var windowHeight = window.innerHeight;
  var elementTop = reavealheading.getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    reavealheading.classList.add("active");
  } else {
    reavealheading.classList.remove("active");
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealheading);

// To check the scroll position on page load
reveal();
revealheading();





