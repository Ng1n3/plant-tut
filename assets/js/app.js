/** ======== SHOW MENU ======== */
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/** ======= MENU ======== */
/**Check if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/** ======= MENU HIDDEN ======= */
/**check if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* ========= REMOVE MENU MOBILE ======== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  //when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/** ======== CHANGE BACKGROUND HEADER ======== */
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than the 800 viewport , add the scroll-header  class to the header tag
  if (this.scrollY >= 80) header.classList.add('scroll-header');
  //The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically.
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/** ======== ACCORDION ======== */
const accordionItems = document.querySelectorAll('.questions__item'); //select the accordion items

accordionItems.forEach(item => {
  //loop through each accordion item(h3 + p)
  const accordionHeader = item.querySelector('.questions__header'); // select the header of each item

  accordionHeader.addEventListener('click', () => {
    // if header is clicked,
    const openItem = document.querySelector('.accordion-open');
    toggleItem(item); //run this function

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = item => {
  const accordionContent = item.querySelector('.questions__content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'; //The scrollHeight value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar
    item.classList.add('accordion-open');
  }
};

/** ======== SCROLL SECTION ACTIVE LINK ======== */
const sections = document.querySelectorAll('section[id]');

function scorllActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scorllActive);

/** ========== SHOW SCROLL UP ========== */
// function scrollUp() {
//   const scrollUp = document.getElementById('scroll-up');
//   //When the scroll is higher than 200vh, add the show-scroll class to the a tag with the scroll-top class.
//   if (this.scrollY >= 200) {
//     scrollUp.classList.add('show-scroll');
//   } else scrollUp.classList.remove('show-scroll');
//  windows.addEventListener('scroll', scrollUp);
// }

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


/** ========= DARK LIGHT THEME ======== */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previouosly selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  document.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

//we validate if the user previously chose a topic
if (selectedTheme) {
  //if validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  document.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    iconTheme
  );
}

//activate/deactive the theme manually with the button
themeButton.addEventListener('click', () => {
  //Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // we save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
