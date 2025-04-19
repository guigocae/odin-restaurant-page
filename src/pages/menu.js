import menuItems from "./items";

function Menu(content) {
    content.innerHTML = '';
    document.body.style.backgroundImage = '';

    const h1 = document.createElement("h1");
    h1.textContent = "Menu Page";
    h1.style.color = "#444"
    content.appendChild(h1);

    const items = document.createElement('div');
    items.classList.add("items");

    // Creating items
    menuItems.forEach((menuItem) => {
        const image = document.createElement('img');
        image.src = menuItem.image;

        const divImage = document.createElement('div');
        divImage.classList.add("img");
        divImage.appendChild(image);

        const title = document.createElement('div');
        title.classList.add("title");
        title.innerText = menuItem.title;

        // Append itens created in the section
        const sectionItem = document.createElement('div');
        sectionItem.classList.add("section");
        sectionItem.appendChild(divImage);
        sectionItem.appendChild(title);

        const description = document.createElement('div');
        description.classList.add("description");
        description.innerText = menuItem.description;

        const value = document.createElement('div');
        value.classList.add("value");
        value.innerText = `$${menuItem.value}`;

        // Append itens in the main div
        const divItem = document.createElement('div');
        // divItem.id = crypto.randomUUID();
        divItem.appendChild(sectionItem);
        divItem.appendChild(description);
        divItem.appendChild(value);

        items.appendChild(divItem);
    });

    content.appendChild(items);
}

export default Menu;