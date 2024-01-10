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
  burgerNav.style.marginTop = '0';
  document.querySelector('.body').classList.add('overflow-hidden');
};

const burgerBtn = document.querySelector('.burger__btn');
burgerBtn.addEventListener('click', openBurgerMenu);

const closeBurgerMenu = () => {
  console.log(window.getComputedStyle(burgerNav).visibility);
  burgerNav.style.visibility = 'hidden';
  burgerNav.style.marginTop = '-100%';
  document.querySelector('.body').classList.remove('overflow-hidden');
};

const burgerCloseBtn = document.querySelector('.burger__close-btn');
burgerCloseBtn.addEventListener('click', closeBurgerMenu);
const burgerAnchors = document.querySelectorAll('.burger__anchor');
burgerAnchors.forEach((anchor) => anchor.addEventListener('click', closeBurgerMenu));
