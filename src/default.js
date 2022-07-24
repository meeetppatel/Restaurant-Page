import { loadheader } from "./header";
import { loadfooter } from "./footer";

function loaddefault() {
    document.getElementById('content').replaceChildren();
    loadheader();
    loadfooter();
}

export {loaddefault};