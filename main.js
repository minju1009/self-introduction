'use strict';

// Animation for Things and Happy
const thingsText = document.querySelector('.about__text-things');


window.addEventListener('scroll', function() {
    let value = window.scrollY;
    if (value > 1200) {
        thingsText.style.animation = 'slide-in-from-left-to-right 0.8s ease-out'
    
    } else  {
        thingsText.style.animation = 'slide-out-from-right-to-left 0.6s ease-out forwards'
    }
})

const happyText = document.querySelector('.about__text-happy');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;
    if (value > 1200) {
        happyText.style.animation = 'slide-in-from-right-to-left 0.8s ease-out'
    } else {
        happyText.style.animation = 'slide-out-from-left-to-right 0.6s ease-out forwards'
    }
})

const middleText = document.querySelector('.about__text-that-make-me');

window.addEventListener('scroll',() => {
    let value = window.scrollY;
    if (value > 1200) {
        middleText.style.animation = 'appear 0.8s ease-out'
    } else{
        middleText.style.animation = 'disappear 0.6s ease-out forwards'
    }
})