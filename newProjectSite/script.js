mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};
//20 é o numero de px pro botão aparecer
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, Edge e Opera
}
