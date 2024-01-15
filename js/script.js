/* Theme switcher */
const switchTheme = () => {
  const themeStyleSheet = document.querySelector('#theme-styles');
  if (themeStyleSheet.getAttribute('href') === 'css/themes/light-theme.css') themeStyleSheet.setAttribute('href', 'css/themes/dark-theme.css');
  else themeStyleSheet.setAttribute('href', 'css/themes/light-theme.css');
};
const themeBtn = document.querySelector('.theme-switcher');
themeBtn.addEventListener('click', switchTheme);
/* ----------- */

/* Burger Menu */
const burgerNav = document.querySelector('.burger__nav');

const openBurgerMenu = () => {
  burgerNav.style.visibility = 'visible';
  burgerNav.style.marginTop = '0';
  document.querySelector('.body').classList.add('overflow-hidden');
};

const burgerBtn = document.querySelector('.burger__btn');
burgerBtn.addEventListener('click', openBurgerMenu);

const closeBurgerMenu = () => {
  burgerNav.style.visibility = 'hidden';
  burgerNav.style.marginTop = '-100%';
  document.querySelector('.body').classList.remove('overflow-hidden');
};

const burgerCloseBtn = document.querySelector('.burger__close-btn');
burgerCloseBtn.addEventListener('click', closeBurgerMenu);
const burgerAnchors = document.querySelectorAll('.burger__anchor');
burgerAnchors.forEach((anchor) => anchor.addEventListener('click', closeBurgerMenu));
