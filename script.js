const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const darkThemeObj = {
  name: 'dark',
  navBG: 'rgb(0 0 0 / 50%)',
  textBoxBG: 'rgb(255 255 255 / 50%',
  toggleText: 'Dark Mode',
  toggleIcon: 'fa-moon'
};

const lightThemeObj = {
    name: 'light',
    navBG: 'rgb(255 255 255 / 50%)',
    textBoxBG: 'rgb(255 255 255 / 50%',
    toggleText: 'Light Mode',
    toggleIcon: 'fa-sun'
};

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(themeObj) {
    nav.style.backgroundColor = themeObj.navBG;
    textBox.style.backgroundColor = themeObj.textBoxBG;
    toggleIcon.children[0].textContent = themeObj.toggleText;
    themeObj.name === 'dark' ? toggleIcon.children[1].classList.replace(lightThemeObj.toggleIcon, darkThemeObj.toggleIcon) : toggleIcon.children[1].classList.replace(darkThemeObj.toggleIcon, lightThemeObj.toggleIcon);
    themeObj.name === 'dark' ? imageMode(darkThemeObj.name) : imageMode(lightThemeObj.name);
}

// Switch Theme Dynamically
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(darkThemeObj);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(lightThemeObj);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Localstorage for theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(darkThemeObj);
    }
}