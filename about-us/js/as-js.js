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
        <a href="../web-design-and-development/" class="nav_elem--sub-menu">
          Web Design & Development
        </a>
      </li>
      <li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="#141751"/>
        </svg>
        <a href="../digital-marketing/" class="nav_elem--sub-menu">
          Digital Marketing
        </a>
      </li>
      <li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="#141751"/>
        </svg>
        <a href="../influencer-marketing/" class="nav_elem--sub-menu">
          Influencer Marketing
        </a>
      </li>
      <li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="#141751"/>
        </svg>
        <a href="../ai-solutions/" class="nav_elem--sub-menu">
          AI Workforce Solutions
        </a>
      </li>
      <li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="#141751"/>
        </svg>
        <a href="../software-development/" class="nav_elem--sub-menu">
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