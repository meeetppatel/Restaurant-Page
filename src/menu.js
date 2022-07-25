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

    const item1 = createitem("Red Monster Pizza","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil", "./images/pizza1.jpg");
    const item2 = createitem("Green house","Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil", "./images/pizza2.jpg");
    const item3 = createitem("Otc delight","Tomato sauce, Mozarella, Chilli flakes, Olives, Basil", "./images/pizza3.jpg");
    const item4 = createitem("Paneer Bomb","Tomato sauce, Bacon, Pineapple, Olives, Basil", "./images/pizza4.jpg");
    const item5 = createitem("Tripple threat","Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli", "./images/pizza5.jpg");
    const item6 = createitem("Jamun Burst","Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil", "./images/pizza6.jpg");
    const item7 = createitem("Palak Tomato shot","Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli", "./images/pizza7.jpg");
    const item8 = createitem("Special Latrin carnage","White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil", "./images/pizza8.jpg");

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