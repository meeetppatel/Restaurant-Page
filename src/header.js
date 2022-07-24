const loadheader = function(){
    const container = document.getElementById("content");

    const header = document.createElement("header");

    const title = document.createElement("h1");
    title.textContent="Tuscany Courtyard";
    
    const nav = document.createElement("div");
    nav.classList.add("nav");

    const homebtn = document.createElement("button");
    // homebtn.id = "homeBtn";
    homebtn.textContent = "Home";
    homebtn.classList.add("btns");

    const menubtn = document.createElement("button");
    // homebtn.id = "menuBtn";
    menubtn.textContent = "Menu";
    menubtn.classList.add("btns");

    const contactbtn = document.createElement("button");
    // homebtn.id = "contactBtn";
    contactbtn.textContent = "Contact";
    contactbtn.classList.add("btns");

    nav.appendChild(homebtn);
    nav.appendChild(menubtn);
    nav.appendChild(contactbtn);

    header.appendChild(title);
    header.appendChild(nav);

    container.appendChild(header);

}

export {loadheader};