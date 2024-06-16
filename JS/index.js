let main = document.getElementById("mainframe")

function generateFooter() {
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

function generateHeader() {
    let header = document.createElement("header");
    header.className="header";

    let headers = [
        {id: "blog", icon: "fa fa-file-lines", name: "Blog", href: "HTML/blog.html"},
        {id: "art", icon: "fa fa-brush", name: "Art", href: "HTML/artcorner.html"},
        {id: "home", icon: "fa fa-home", name: "Home", href: "HTML/main.html"},
        {id: "apps", icon: "fa fa-terminal", name: "Apps", href: "HTML/programms.html"},
        {id: "hobbies", icon: "fa fa-bars", name: "Hobbies", href: "HTML/hobbies.html"}
    ];

    headers.forEach(e => {
        let p = document.createElement("p");
        p.id = e.id;
        p.className = "headerText";
        p.innerHTML = `<i class="${e.icon}"></i><br>${e.name}`;
        p.addEventListener("click", () => {
            $(main).attr("src", `${e.href}`);
        });

        header.appendChild(p);
    })

    document.body.insertBefore(header, main);
};

document.addEventListener("DOMContentLoaded", () => {
    generateHeader();
    generateFooter();
});

function adjustIframeHeight(iframe, buffer = 20, minHeight = 900) {
    const desiredHeight = iframe.contentWindow.document.body.scrollHeight + buffer;
    const newHeight = Math.max(desiredHeight, minHeight); 

    iframe.style.height = newHeight + 'px';
}

function waitForContentStabilization(iframe, callback, interval = 100, maxAttempts = 10) {
    let lastHeight = 0;
    let attempts = 0;

    function checkHeight() {
        const currentHeight = iframe.contentWindow.document.body.scrollHeight;

        if (currentHeight !== lastHeight) {
            lastHeight = currentHeight;
            attempts = 0; // Reset attempts if height changes
        } else {
            attempts++;
        }

        if (attempts >= maxAttempts) {
            callback();
        } else {
            setTimeout(checkHeight, interval);
        }
    }

    checkHeight();
}

function setupMutationObserver(iframe) {
    const observer = new MutationObserver(() => {
        iframe.addEventListener('load', function onLoad() {
            waitForContentStabilization(iframe, () => adjustIframeHeight(iframe));
            iframe.removeEventListener('load', onLoad);
        });
    });

    observer.observe(iframe, { attributes: true, attributeFilter: ['src'] });
}

$(document).ready(function() {
    let main = document.getElementById('mainframe');

    setupMutationObserver(main);

    window.addEventListener('resize', function() {
        waitForContentStabilization(main, () => adjustIframeHeight(main));
    });

    adjustIframeHeight(main);
});
