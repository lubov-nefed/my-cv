/* Theme switcher */
const switchTheme = () => {
  const themeStyleSheet = document.querySelector('#theme-styles');
  if (themeStyleSheet.getAttribute('href') === 'css/light-theme.css') themeStyleSheet.setAttribute('href', 'css/dark-theme.css');
  else themeStyleSheet.setAttribute('href', 'css/light-theme.css');
};
const themeBtn = document.querySelector('.theme-switcher');
themeBtn.addEventListener('click', switchTheme);
/* ----------- */

/* Burger Menu */
const burgerNav = document.querySelector('.burger__nav');

const openBurgerMenu = () => {
  console.log(window.getComputedStyle(burgerNav).visibility);
  burgerNav.style.visibility = 'visible';
};

const burgerBtn = document.querySelector('.burger__btn');
burgerBtn.addEventListener('click', openBurgerMenu);

const closeBurgerMenu = () => {
  console.log(window.getComputedStyle(burgerNav).visibility);
  burgerNav.style.visibility = 'hidden';
};

const burgerCloseBtn = document.querySelector('.burger__close-btn');
burgerCloseBtn.addEventListener('click', closeBurgerMenu);
const burgerAnchors = document.querySelectorAll('.burger__anchor');
burgerAnchors.forEach((anchor) => anchor.addEventListener('click', closeBurgerMenu));
