// eslint-disable-next-line import/extensions
import dataLang from './lang-dependent-content.js';

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

/* Theme switcher */
const switchTheme = () => {
  const themeStyleSheet = document.querySelector('#theme-styles');
  if (themeStyleSheet.getAttribute('href') === 'css/themes/light-theme.css') themeStyleSheet.setAttribute('href', 'css/themes/dark-theme.css');
  else themeStyleSheet.setAttribute('href', 'css/themes/light-theme.css');
};
const themeBtn = document.querySelector('.theme-switcher');
themeBtn.addEventListener('click', switchTheme);

/* Lang switcher */
let currentLang = 'en';
const langSwitcherHandler = () => {
  const langSwitcherAnimation = () => {
    const langSwitcherCircle = document.querySelector('.lang-switcher__circle');
    if (window.getComputedStyle(langSwitcherCircle).left === '7px') langSwitcherCircle.style.left = '28px';
    else langSwitcherCircle.style.left = '7px';
  };
  langSwitcherAnimation();

  const switchLang = () => {
    if (currentLang === 'en') currentLang = 'ru';
    else currentLang = 'en';
    Object.keys(dataLang[currentLang]).forEach((key) => {
      if (typeof dataLang[currentLang][key] === 'object') {
        const collection = document.querySelectorAll(`[data-lang=${key}]`);
        for (let i = 0; i < collection.length; i++) {
          const element = collection[i];
          element.innerHTML = dataLang[currentLang][key][i];
        }
      } else document.querySelector(`[data-lang=${key}]`).innerHTML = dataLang[currentLang][key];
    });
  };
  switchLang();
};

const langSwitcher = document.querySelector('.lang-switcher');
langSwitcher.addEventListener('click', langSwitcherHandler);

/* Up arrow btn */
const upArrowBtn = document.querySelector('.up-arrow-btn');
const handleScroll = () => {
  if (document.documentElement.scrollTop > 100) {
    upArrowBtn.style.display = 'block';
  } else upArrowBtn.style.display = 'none';
};
document.addEventListener('scroll', handleScroll);
