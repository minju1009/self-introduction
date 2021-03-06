'use strict';
// Changing the color of the nav as the scroll goes down
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll',() => {
    if (scrollY > navbar.scrollHeight){
        navbar.classList.add('black');
    } else{
        navbar.classList.remove('black');
    }
})

// navbar shows up when you click the toggle button
const toggleBtn = document.querySelector(".navbar__toggle-btn");
const navbarMenu = document.querySelector(".navbar__menu");

toggleBtn.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('show');
})



if (window.matchMedia("(min-width: 768px)").matches){

// Animation for Things and Happy
const happiness = document.querySelector('#happiness');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    if (value > 10) {
        happiness.style.animation = 'slide-in-from-left-to-right 0.8s ease-out'
    
    } else  {
        happiness.style.animation = 'slide-out-from-right-to-left 0.6s ease-out forwards'
    }
})

const excitement = document.querySelector('#excitement');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;
    if (value > 10) {
        excitement.style.animation = 'slide-in-from-right-to-left 0.8s ease-out'
    } else {
        excitement.style.animation = 'slide-out-from-left-to-right 0.6s ease-out forwards'
    }
})

const indulge = document.querySelector('#indulge');

window.addEventListener('scroll',() => {
    let value = window.scrollY;
    if (value > 10) {
        indulge.style.animation = 'appear 0.8s ease-out'
    } else{
        indulge.style.animation = 'disappear 0.6s ease-out forwards'
    }
})

const and = document.querySelector('#and');

window.addEventListener('scroll',() => {
    let value = window.scrollY;
    if (value > 10) {
        and.style.animation = 'appear 0.8s ease-out'
    } else{
        and.style.animation = 'disappear 0.6s ease-out forwards'
    }
})
} else{
    







};