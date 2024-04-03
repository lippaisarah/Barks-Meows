// mobile menu appears
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});



function fillAdoptionForm(shelterId) {
  // Implement functionality to fill adoption form for the selected shelter
}

//show hide
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//dropdown
function toggleContent() {
  document.querySelector('.hidden').classList.toggle('visible');
}

document.addEventListener('DOMContentLoaded', function () {
  
  // image carousel 
  const carouselTrack = document.getElementsByClassName("carousel-track")[0]
  console.log(carouselTrack)

  const images = document.getElementsByClassName('cover img');
  console.log(images)
  
  let currentImage = 0;

  const nextImage = () => {
    console.log(currentImage)
    if (currentImage >= images.length) {
      currentImage = 0;
    }

    carouselTrack.style.transform = `translateX(-${currentImage * images[currentImage].width}px)`;
    currentImage++;
  }

  // Function to automatically rotate images
  const autoRotate = () => {
    nextImage();
    setTimeout(autoRotate, 4000); // Change 3000 to adjust rotation interval (in milliseconds)
  }

  // Start automatic rotation on window load
  window.addEventListener('load', autoRotate);
})
