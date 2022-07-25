import { loadheader } from './header';
import { loadfooter } from './footer';

const loadcontact = function(){
    const container = document.getElementById("content");
    container.replaceChildren()

    loadheader();


    const main = document.createElement("div");
    main.classList.add("main");

    const contact = document.createElement("div");
    contact.classList.add("home");

    const toptext = document.createElement("div")
    toptext.classList.add("top-text");

    const line1 = document.createElement("p")
    line1.textContent="123 456 789";

    const line2 = document.createElement("p")
    line2.textContent=" Hollywood Boulevard 42, Los Angeles, USA";

    toptext.appendChild(line1);
    toptext.appendChild(line2);

    const map = document.createElement("div");
    map.classList.add("map");
    map.innerHTML=  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12090.100074099026!2d-73.99295192292728!3d40.75047596100702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854faa8d447%3A0x100a2b0d8c445c5f!2sCarmine&#39;s%20Italian%20Restaurant%20-%20Times%20Square!5e0!3m2!1sen!2sus!4v1658179578284!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    contact.appendChild(toptext);
    contact.appendChild(map);

    main.appendChild(contact);

    container.appendChild(main);

    loadfooter();
}

export {loadcontact}