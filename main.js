// A function to switch mode.
let lightMode = document.querySelector('button')
lightMode.addEventListener('click', switchMode)

function switchMode () {
    let body = document.body;
    body.classList.toggle('light-mode')
    lightMode.innerHTML = 'Change mode'
}