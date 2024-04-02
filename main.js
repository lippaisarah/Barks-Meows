// mobile menu appears
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

function displayShelters(shelters) {
  var shelterList = document.getElementById('shelter-list');
  shelterList.innerHTML = ''; // Clear previous results

  shelters.forEach(function (shelter) {
    var shelterDiv = document.createElement('div');
    shelterDiv.classList.add('shelter');

    var shelterName = document.createElement('h2');
    shelterName.textContent = shelter.tags.name || 'Unnamed Shelter';

    var shelterAddress = document.createElement('p');
    shelterAddress.textContent = shelter.tags.addr_street || '';

    var adoptionFormButton = document.createElement('button');
    adoptionFormButton.textContent = 'Fill Adoption Form';
    adoptionFormButton.addEventListener('click', function () {
      fillAdoptionForm(shelter.id);
    });

    shelterDiv.appendChild(shelterName);
    shelterDiv.appendChild(shelterAddress);
    shelterDiv.appendChild(adoptionFormButton);

    shelterList.appendChild(shelterDiv);
  });
}

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
