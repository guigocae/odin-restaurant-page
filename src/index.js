import './assets/css/index.css';
import './assets/css/menu.css';
import './assets/css/about.css';
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';

const content = document.querySelector("#content");
//About(content);

(function handleNavigation() {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const about = document.querySelector("#about");

    home.addEventListener("click", () => Home(content));
    menu.addEventListener("click", () => Menu(content));
    about.addEventListener("click", () => About(content));
    
    console.log(home);
})();


