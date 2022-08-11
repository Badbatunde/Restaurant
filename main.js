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

// The map
mapboxgl.accessToken =
"pk.eyJ1IjoiYmFkYmF0dW5kZSIsImEiOiJjbDZjbTV1OWswNXVmM2NuaWF2YnplNmtvIn0.rOJV4i3F8y72OXlu27TroA";
var map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/mapbox/streets-v11",
center: [3.2804, 6.6284],
zoom: 18,
});

// For the mobile Navbar.
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }