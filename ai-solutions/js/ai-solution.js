const humanSection = document.querySelector('.resources-section__human');
const programmaticSection = document.querySelector('.resources-section__programmatic');

humanSection.addEventListener('mouseenter', () => {
  programmaticSection.classList.add('blurred');
});

humanSection.addEventListener('mouseleave', () => {
  programmaticSection.classList.remove('blurred');
});

programmaticSection.addEventListener('mouseenter', () => {
  humanSection.classList.add('blurred');
});

programmaticSection.addEventListener('mouseleave', () => {
  humanSection.classList.remove('blurred');
});

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.about__menu');
  menu.style.left = '0px';

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


////////// DEPARTURES SECTION ////////////
//SCROLL BUTTON

const scrollButton = document.querySelector('.departures__scroll');
const scrollContainer = document.querySelector('.departures__grid');

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
