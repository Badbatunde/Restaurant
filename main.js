// A function to switch mode.
let lightMode = document.querySelector('button')
lightMode.addEventListener('click', switchMode)

function switchMode () {
    let body = document.body;
    body.classList.toggle('light-mode')
    lightMode.classList = 'fa fa-moon-o'
}

// Slide start point, new images array and a time variable.
let i = 0;
let images = []; 
let time = 3000;

// Images list for header
images[0] = 'images/dodo.jpg';
images[1] = 'images/fufu.jpeg';
images[2] = 'images/vegs.jpeg';
images[3] = 'images/wrice.jpeg';
images[4] = 'images/yellow.jpeg';


// Change Image
function changeImage() {
    document.slide.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImage()', time);
}

window.onload = changeImage;

// Initialize and add the map
/* function initMap() {
  
    // The location of Geeksforgeeks office
    const Jedtt = {
        lat: 6.605874,
        lng: 3.349149
    };

    // Create the map, centered at gfg_office
    const map = new google.maps.Map(
            document.getElementById("map"), {

        // Set the zoom of the map
        zoom: 17.56,
        center: Jedtt,
    });
} */
