import background from "../assets/images/background.jpg";

function Home(content) {
    content.innerHTML = "";
    document.body.style.backgroundImage = `url(${background})`; 

    const h1 = document.createElement("h1");
    h1.textContent = "This is home page";
    h1.style.color = "white";

    content.appendChild(h1);
}

export default Home;