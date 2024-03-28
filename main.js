document.addEventListener("DOMContentLoaded", function() {

// hamburger menu
  const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
});

document.getElementById('zip-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Show the map image
  var mapImage = document.getElementById('map'); // Update the ID to match your map image ID
  mapImage.style.display = 'block'; // Display the map image
  setTimeout(function() {
    mapImage.style.opacity = '1'; // Fade in the map image
  }, 100);
});

//show map
function toggleImage() {
  document.querySelector('#map').classList.toggle('hidden'); 
}

//dropdown
function toggleContent() {
  document.querySelector('.hidden').classList.toggle('visible');
}