/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadhome": () => (/* binding */ loadhome)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);




const loadhome = function (){

    
    const container = document.getElementById("content");
    container.replaceChildren();
    (0,_header__WEBPACK_IMPORTED_MODULE_0__.loadheader)();

    const main = document.createElement("div");
    main.classList.add("main");

    const home = document.createElement("div");
    home.classList.add("home");

    const toptext = document.createElement("div");
    toptext.classList.add("top-text");

    const imgdiv = document.createElement("div");
    imgdiv.classList.add("chef-img");

    const bottomtext = document.createElement("div");
    bottomtext.classList.add("bottom-text");

    const line1 = document.createElement("p");
    line1.textContent="Best pizza in your country";
    const line2 = document.createElement("p");
    line2.textContent="Made with passion since 1908";
    const line3 = document.createElement("p");
    line3.textContent="Order online or visit us!";

    toptext.appendChild(line1);
    toptext.appendChild(line2);
    bottomtext.appendChild(line3);

    home.appendChild(toptext);
    home.appendChild(imgdiv);
    home.appendChild(bottomtext);

    main.appendChild(home);

    container.appendChild(main);

    (0,_footer__WEBPACK_IMPORTED_MODULE_1__.loadfooter)();

}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadheader": () => (/* binding */ loadheader)
/* harmony export */ });
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




/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadfooter": () => (/* binding */ loadfooter)
/* harmony export */ });
const loadfooter = function (){

    const container = document.getElementById("content");

    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = `Copyright © 2022 MeetPatel <a href="https://github.com/meetmepatel"><i class="fa-brands fa-github"></i></a>`;

    container.appendChild(footer);
}



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadmenu": () => (/* binding */ loadmenu)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const loadmenu = function() {
    const container = document.getElementById("content");
    container.replaceChildren();

    (0,_header__WEBPACK_IMPORTED_MODULE_0__.loadheader)();

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

    (0,_footer__WEBPACK_IMPORTED_MODULE_1__.loadfooter)();
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



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadcontact": () => (/* binding */ loadcontact)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const loadcontact = function(){
    const container = document.getElementById("content");
    container.replaceChildren()

    ;(0,_header__WEBPACK_IMPORTED_MODULE_0__.loadheader)();


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

    (0,_footer__WEBPACK_IMPORTED_MODULE_1__.loadfooter)();
}



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadhome)();

const tabswich = function(){
    document.getElementById("homeBtn").addEventListener("click", function(){
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadhome)();
        tabswich();
    });
    document.getElementById("contactBtn").addEventListener("click",function(){
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadcontact)();      
        tabswich();
    });
    document.getElementById("menuBtn").addEventListener("click",function(){
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadmenu)();
        tabswich();
    })
};
tabswich(); 
})();

/******/ })()
;