// A function to switch mode.
let lightMode = document.querySelector('button')
lightMode.addEventListener('click', switchMode)

function switchMode () {
    let body = document.body;
    body.classList.toggle('light-mode')
    lightMode.innerHTML = 'Change mode'
}

// Slide start point, images array and timeout.
let i = 0;
let images = []; 
let time = 3000;

// Images list
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
