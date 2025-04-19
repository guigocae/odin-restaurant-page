function About(content) {
    content.innerHTML = '';
    document.body.style.backgroundImage = '';

    const h1 = document.createElement("h1");
    h1.textContent = "About Page";
    content.appendChild(h1);
}

export default About;