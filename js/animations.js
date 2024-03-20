// mobile menu appears
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

$(document).ready(function () {
  $(".media-container").hide();
  $(window).scroll(function () {
    //content boxes slide down

    if ($(this).scrollTop() > 0) {
      $(".media-container").slideDown(600);
    }
  });

  //local nav inverts on hover
  $(".local-navlink").hover(function () {
    $(this).toggleClass("active");
  });

  // about me pic bounces to appear on screen
  $(".hannahpic").hide().show("bounce", { times: 3 }, 1000);

  // blob pic scale animation
  $(".blob").hide().toggle("scale");
});
