/* Theme switcher */
const switchTheme = () => {
    const themeStyleSheet = document.querySelector('#theme-styles');
    themeStyleSheet.getAttribute('href') === 'css/light-theme.css' ? themeStyleSheet.setAttribute('href', 'css/dark-theme.css') : themeStyleSheet.setAttribute('href', 'css/light-theme.css')
}
const themeBtn = document.querySelector('.theme-switcher');
themeBtn.addEventListener('click', switchTheme);
/* ----------- */