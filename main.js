
// mobile menu appears
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });

document.getElementById('zip-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var zipCode = document.getElementById('zip').value;
    
    // Step 1: Use Nominatim API to get coordinates from zip code
    fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + zipCode)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var latitude = data[0].lat;
                var longitude = data[0].lon;
                
                // Step 2: Use Overpass API to find nearby shelters
                fetch('https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="animal_shelter"](around:5000,' + latitude + ',' + longitude + ');out;')
                    .then(response => response.json())
                    .then(data => {
                        displayShelters(data.elements);
                    })
                    .catch(error => {
                        console.error('Error fetching nearby shelters:', error);
                    });
            } else {
                console.error('No coordinates found for the zip code:', zipCode);
            }
        })
        .catch(error => {
            console.error('Error fetching coordinates:', error);
        });
});

function displayShelters(shelters) {
    var shelterList = document.getElementById('shelter-list');
    shelterList.innerHTML = ''; // Clear previous results
    
    shelters.forEach(function(shelter) {
        var shelterDiv = document.createElement('div');
        shelterDiv.classList.add('shelter');
        
        var shelterName = document.createElement('h2');
        shelterName.textContent = shelter.tags.name || 'Unnamed Shelter';
        
        var shelterAddress = document.createElement('p');
        shelterAddress.textContent = shelter.tags.addr_street || '';
        
        var adoptionFormButton = document.createElement('button');
        adoptionFormButton.textContent = 'Fill Adoption Form';
        adoptionFormButton.addEventListener('click', function() {
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
