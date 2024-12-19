const DMselectors = document.querySelectorAll('.dm-selector_item');
const DMcontents = document.querySelectorAll('.dm_sel_cont_item_wrapper');

DMselectors.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove 'active_selector' from all selectors
    DMselectors.forEach((i) => i.classList.remove('active_selector'));

    // Hide all content blocks with fade-out
    DMcontents.forEach((content) => {
      content.classList.remove('fade-in');
      content.style.display = 'none';
    });

    // Add 'active_selector' to the clicked selector
    item.classList.add('active_selector');

    // Show and animate the corresponding content block
    DMcontents[index].style.display = 'block';
    setTimeout(() => DMcontents[index].classList.add('fade-in'), 10);
  });
});
document.querySelector('#item3').click();

// const revMenu = document.querySelector('.revenue_menu');
// window.addEventListener('scroll', () => {
//   console.log(window.scrollY);
//   console.log('item' + revMenu.scrollTop);
// });
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.revenue_menu');
  const menuOffset = menu.getBoundingClientRect().top + window.scrollY;

  // Adjust this offset value to make it sticky earlier
  const earlyOffset = 100; // You can adjust this value as needed

  window.addEventListener('scroll', function () {
    // Check if the scroll position plus half the viewport height minus the offset reaches the menu
    const triggerPoint = window.scrollY + window.innerHeight / 2 - earlyOffset;

    if (triggerPoint >= menuOffset) {
      menu.classList.add('sticky');
    } else {
      menu.classList.remove('sticky');
    }
  });
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
