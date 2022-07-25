const loadheader = function () {
  const container = document.getElementById("content");
  container.textContent=""

  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.textContent = "Tuscany Courtyard";

  const nav = document.createElement("div");
  nav.classList.add("nav");

  const homebtn = document.createElement("button");
  homebtn.textContent = "Home";
  homebtn.setAttribute("id", "homeBtn");
  homebtn.classList.add("btns");

  const menubtn = document.createElement("button");
  menubtn.textContent = "Menu";
  menubtn.setAttribute("id", "menuBtn");
  menubtn.classList.add("btns");

  const contactbtn = document.createElement("button");
  contactbtn.textContent = "Contact";
  contactbtn.setAttribute("id", "contactBtn");
  contactbtn.classList.add("btns");

  nav.appendChild(homebtn);
  nav.appendChild(menubtn);
  nav.appendChild(contactbtn);

  header.appendChild(title);
  header.appendChild(nav);

  container.appendChild(header);
};

export { loadheader };
