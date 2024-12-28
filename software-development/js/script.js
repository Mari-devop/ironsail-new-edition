////////// DO SECTION ////////////
//SCROLL BUTTON

const scrollButton = document.querySelector('.do__scroll');
const scrollContainer = document.querySelector('.do-section__grid-container');

let scrollDirectionForward = true; 
const scrollAmount = 300; 

scrollButton.addEventListener('click', () => {
    if (scrollDirectionForward) {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    if (scrollContainer.scrollLeft >= maxScrollLeft) {
        scrollDirectionForward = false; 
    } else if (scrollContainer.scrollLeft <= 0) {
        scrollDirectionForward = true; 
    }
});


////////// MENU ////////////
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.do__menu');
    const menuOffset = menu.getBoundingClientRect().top + window.scrollY;

    const earlyOffset = 100;

    window.addEventListener('scroll', function () {
        const triggerPoint = window.scrollY + window.innerHeight / 2 - earlyOffset;

        if (triggerPoint >= menuOffset) {
            menu.classList.add('sticky');
        } else {
            menu.classList.remove('sticky');
        }
    });
});