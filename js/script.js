const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const popupSlide = document.querySelector('#popupSlide');
const sliderItem = document.querySelectorAll('.our_requirements_content_item');
const sliderPhoto = document.querySelector('.our_requirements_img');
const body = document.body;
const servicesMobileLink = document.getElementById("servicesMobileLink");
const servicesDropdownMobile = document.querySelector(".services-dropdown-mobile");

burger.addEventListener('click', burgerHandler);
popup.addEventListener("click", (e) => {
  if (
    servicesMobileLink.contains(e.target) || 
    servicesDropdownMobile.contains(e.target)
  ) {
    return; 
  }
  burgerHandler(e);
});

sliderItem.forEach((e) => {
  e.addEventListener('click', () => {
    setImage(e, sliderItem);
  });
});

function burgerHandler(e) {
  if (popup.classList.contains("open")) {
    popup.classList.add("close");
    body.classList.remove("noscroll");
    popupSlide.classList.add("slideout");

    setTimeout(() => {
      popup.classList.remove("close");
      popup.classList.remove("open");
      popupSlide.classList.remove("slideout");
      popupSlide.classList.remove("slidein");
    }, 300);
  } else {
    body.classList.add("noscroll");
    popup.classList.add("open");
    popupSlide.classList.add("slidein");
  }
  burger.classList.toggle("active");
}


var className = 'inverted';
var scrollTrigger = 60;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName('header')[0].classList.add(className);
  } else {
    document.getElementsByTagName('header')[0].classList.remove(className);
  }
};





