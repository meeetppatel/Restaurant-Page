const loadfooter = function (){

    const container = document.getElementById("content");

    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = `Copyright © 2022 MeetPatel <a href="https://github.com/meetmepatel"><i class="fa-brands fa-github"></i></a>`;

    container.appendChild(footer);
}

export {loadfooter};