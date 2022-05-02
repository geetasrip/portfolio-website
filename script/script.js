// add class navbarDark on navbar scroll

window.onscroll = function() {
  const header = document.querySelector(".navbar");
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};
