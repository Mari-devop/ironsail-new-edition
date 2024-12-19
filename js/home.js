document.querySelectorAll('.slider__container').forEach((container) => {
    container.addEventListener('click', () => {
        document.querySelectorAll('.slider__container').forEach((item) => {
            item.classList.remove('expanded');
            item.classList.add('collapsed');
        });
        container.classList.remove('collapsed');
        container.classList.add('expanded');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.slider__menu');
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


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.digital-marketing__card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetUrl = card.getAttribute('data-url');
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });
    });
});



////////// DIGITAL MARKETING SECTION ////////////
//SCROLL BUTTON

const scrollButton = document.querySelector('.digital-marketing__scroll');
const scrollContainer = document.querySelector('.digital-marketing__content');

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



//////// INDUSTRIES SECTION ////////////
//SCROLL SWIPER + BUTTON

var swiper2 = new Swiper('.mySwiper2', {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        330: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        830: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

let isAtEnd = false;

document.querySelector('.dm-ind-scroll').addEventListener('click', () => {

    if (isAtEnd) {
        swiper2.slidePrev();
    } else {
        swiper2.slideNext();
    }

    isAtEnd = swiper2.isEnd ? true : swiper2.isBeginning ? false : isAtEnd;
});



