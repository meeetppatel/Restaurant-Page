import { loadheader } from "./header";
import { loadfooter } from "./footer";
import { loadhome } from "./home";

function loaddefault() {
    document.getElementById('content').replaceChildren();
    loadheader();
    loadhome();
    loadfooter();
}

export {loaddefault};