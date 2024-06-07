let main = document.getElementById("mainframe")

function GenerateFooter() {
    let footer = document.createElement("footer");
    footer.style.backgroundColor = "#333";
    footer.style.borderRadius = "20px";
    footer.style.padding = "20px";
    footer.style.marginTop = "20px";

    let footerDiv = document.createElement("div");
    footerDiv.className = "footer";

    footer.appendChild(footerDiv);
    
    let links = [
        { id: "Youtube", icon: "fab fa-youtube", href: "https://www.youtube.com/channel/UC_ey0FNtdHaFJCQjSqN-wLQ", text: "Youtube" },
        { id: "Github", icon: "fab fa-github", href: "https://github.com/NachitheProtogen", text: "Github" },
        { id: "Reddit", icon: "fab fa-reddit", href: "https://www.reddit.com/user/Affectionate-Pain229", text: "Reddit" },
        { id: "Twitter", icon: "fab fa-twitter", href: "https://twitter.com/Musicprotogen", text: "Twitter" },
        { id: "Discord", icon: "fab fa-discord", href: "https://discord.com/users/324313743796207641", text: "Discord" },
        { id: "Steam", icon: "fab fa-steam", href: "https://steamcommunity.com/id/Nanachi_OwO/", text: "Steam"},
    ];

    links.forEach(function (linkInfo) {
        let link = document.createElement("p");
        link.className = "footerText";
        link.id = linkInfo.id;
        link.innerHTML = '<a href="' + linkInfo.href + '" style="color: white;"><i class="' + linkInfo.icon + '"></i> ' + linkInfo.text + '</a>';
        footerDiv.appendChild(link);
    });

    let mail = document.createElement("p");
    mail.style.textAlign = "right";
    mail.style.paddingRight = "20px";
    mail.style.color = "white";
    mail.innerHTML = 'You can send me feedback under: <a href="mailto:shadownachi.website@gmail.com" style="color: white;">shadownachi.website@gmail.com</a>';

    footer.appendChild(mail);

    document.body.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", () => {
    GenerateFooter();
});

home.addEventListener("click", () => {
    main.setAttribute("src", "HTML/main.html");
})

art.addEventListener("click", () => {
    main.setAttribute("src", "HTML/artcorner.html");
})

apps.addEventListener("click", () => {
    main.setAttribute("src", "HTML/programms.html");
})