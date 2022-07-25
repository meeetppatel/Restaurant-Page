import { loadheader } from './header';
import { loadfooter } from './footer';

const loadmenu = function() {
    const container = document.getElementById("content");
    container.replaceChildren();

    loadheader();

    const main = document.createElement("div");
    main.classList.add("main");





    loadfooter();
}

export {loadmenu}