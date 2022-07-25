import { loadheader } from './header';
import { loadfooter } from './footer';

const loadmenu = function() {
    const container = document.getElementById("content");
    container.replaceChildren();

    loadheader();

    const main = document.createElement("div");
    main.classList.add("main");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const item1 = createitem("pizza1","asdadadadaasda", "./images/pizza1.jpg");
    const item2 = createitem("pizza2","asdadadadaasda", "./images/pizza2.jpg");
    const item3 = createitem("pizza3","asdadadadaasda", "./images/pizza3.jpg");
    const item4 = createitem("pizza4","asdadadadaasda", "./images/pizza4.jpg");
    const item5 = createitem("pizza5","asdadadadaasda", "./images/pizza5.jpg");
    const item6 = createitem("pizza6","asdadadadaasda", "./images/pizza6.jpg");
    const item7 = createitem("pizza7","asdadadadaasda", "./images/pizza7.jpg");
    const item8 = createitem("pizza8","asdadadadaasda", "./images/pizza8.jpg");

    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(item5);
    menu.appendChild(item6);
    menu.appendChild(item7);
    menu.appendChild(item8);

    main.appendChild(menu);
    container.appendChild(main);

    loadfooter();
}

function createitem(name, info ,img){
    const item = document.createElement("div");
    item.classList.add("items");

    const itemimg = document.createElement("img");
    itemimg.src = `${img}`;

    const itemname = document.createElement("h3");
    itemname.textContent = `${name}`;

    const details = document.createElement("p");
    details.textContent=`${info}`;


    item.appendChild(itemimg);
    item.appendChild(itemname);
    item.appendChild(details);

    return item;
}

export {loadmenu}