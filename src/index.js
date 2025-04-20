import './assets/css/index.css';
import './assets/css/menu.css';
import './assets/css/about.css';
import 'animate.css';
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';

const content = document.querySelector("#content");
Home(content);

(function handleNavigation() {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const about = document.querySelector("#about");

    home.addEventListener("click", () => {
        Home(content);
        document.querySelector("h1").classList.add('animate__animated', 'animate__fadeIn');
    });
    menu.addEventListener("click", () => {
        Menu(content);
        document.querySelector("h1").classList.add('animate__animated', 'animate__fadeIn');
        document.querySelector(".items").classList.add('animate__animated', 'animate__fadeIn');
    });
    about.addEventListener("click", () => {
        About(content);
        document.querySelector("h1").classList.add('animate__animated', 'animate__fadeIn');
        document.querySelector("#about-content").classList.add('animate__animated', 'animate__fadeIn');
    });
    
    console.log(home);
})();


