const loadhome = function (){
    const container = document.getElementById("content");

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

}
export{loadhome};