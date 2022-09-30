const hamburgerButton = document.querySelector(".hamburger-btn");
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', ()=> {

    hamburgerButton.classList.toggle('active');
    menu.classList.toggle('active');

});


console.log(hamburgerButton);
