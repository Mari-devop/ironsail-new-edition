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


//DROPDOWN MENU
document.addEventListener("DOMContentLoaded", () => {
  const servicesLink = document.querySelector(".navbar_menu > li > a.nav_elem");
  const dropdown = document.createElement("ul");
  dropdown.classList.add("services-dropdown");
  dropdown.innerHTML = `
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="#141751"/>
        </svg>
        <a href="./development/" class="nav_elem--sub-menu">
          Web Design & Development
        </a>
      </li>
      <li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="#141751"/>
        </svg>
        <a href="./digital-marketing/" class="nav_elem--sub-menu">
          Digital Marketing
        </a>
      </li>
      <li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="#141751"/>
        </svg>
        <a href="/" class="nav_elem--sub-menu">
          Influencer Marketing
        </a>
      </li>
      <li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="#141751"/>
        </svg>
        <a href="./ai-solutions/" class="nav_elem--sub-menu">
          AI Workforce Solutions
        </a>
      </li>
      <li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="#141751"/>
        </svg>
        <a href="./software-development/" class="nav_elem--sub-menu">
          Software Development
        </a>
      </li>
    `;
  servicesLink.parentElement.appendChild(dropdown);

  const svgUp = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 15L12 9L18 15" stroke="#141751" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

  const svgDown = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M7 10L12 15L17 10" stroke="#141751" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

  servicesLink.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("open");
    const svgElement = servicesLink.querySelector("svg");
    svgElement.outerHTML = dropdown.classList.contains("open") ? svgUp : svgDown;
  });

  document.addEventListener("click", (e) => {
    if (!servicesLink.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      const svgElement = servicesLink.querySelector("svg");
      svgElement.outerHTML = svgDown;
    }
  });
});


//DROPDOWN MENU MOBILE
document.addEventListener("DOMContentLoaded", () => {
  const servicesMobileLink = document.getElementById("servicesMobileLink");
  const servicesDropdownMobile = document.querySelector(".services-dropdown-mobile");
  
  const svgUp = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 15L12 9L18 15" stroke="#141751" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  const svgDown = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 10L12 15L17 10" stroke="#141751" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  servicesMobileLink.addEventListener("click", (e) => {
    e.preventDefault();

    servicesDropdownMobile.classList.toggle("open");

    const svgIcon = servicesMobileLink.querySelector("svg");
    if (servicesDropdownMobile.classList.contains("open")) {
      svgIcon.outerHTML = svgUp;
    } else {
      svgIcon.outerHTML = svgDown;
    }
  });
});



