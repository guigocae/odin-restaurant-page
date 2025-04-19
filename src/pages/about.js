import github from '../assets/images/github.png';

function About(content) {
    content.innerHTML = '';
    document.body.style.backgroundImage = '';

    const h1 = document.createElement("h1");
    h1.textContent = "About Page";
    h1.style.color = "#444";
    content.appendChild(h1);

    const div = document.createElement('div');
    div.id = "about-content";

    const p1 = document.createElement('p');
    p1.textContent = "This is a restaurant webpage I created as a training exercise to practice front-end development fundamentals.";

    const h3 = document.createElement('h3');
    h3.textContent = "Key Features & Approach:";

    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    li1.textContent = "Built with vanilla JavaScript, dynamically rendering all page elements.";
    li2.textContent = "Used Webpack for bundling, development workflow, and module management.";
    li3.textContent = "Structured the code using ES6 modules for better organization, inspired by component-based frameworks (like React) but without a virtual DOM.";

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    const p2 = document.createElement('p');
    p2.innerText = "While intentionally simple, this project helped me explore DOM manipulation, modular architecture, and build tools.";

    const p3 = document.createElement('p');
    p3.classList.add("footer");

    const img = document.createElement('img');
    img.src = github;

    const link = document.createElement('a');
    link.href = "https://github.com/guigocae";
    link.target = "_blank";
    link.textContent = "My github";

    p3.appendChild(img);
    p3.appendChild(link);

    div.appendChild(p1);
    div.appendChild(h3);
    div.appendChild(ul);
    div.appendChild(p2);
    div.appendChild(p3);

    content.appendChild(div);
}

export default About;