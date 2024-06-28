async function loadblog() { //loads the blog json
    try {
        const response = await fetch("../JSON/blog.json");
        const blog = await response.json();
        nachiblogs(blog);
    } catch (error) {
        console.log("Error loading images:", error);
    }
}

function nachiblogs(blogJson) { //loads the blogs onto the HTML
    const blogs = document.getElementsByClassName("colectiondiv");

    blogJson.forEach(blog => {
        let container = document.createElement("div")
        container.className = "container";
        $(blogs).append(container);
        
        let headline = document.createElement("h1");
        headline.innerHTML = blog.name;

        let date = document.createElement("p");
        date.innerHTML = blog.date;

        let content = document.createElement("p");
        content.innerHTML = blog.content;

        $(container).append(headline);
        $(container).append(date);
        if(blog.picture != ""){ //adding a picture if included
            let pictur = document.createElement("img");
            pictur.src = blog.picture;
            pictur.width = 300;
            
            $(container).append(pictur);
        } else {
            return;
        };
        $(container).append(content);

    });
}

$(document).ready(function () {
    loadblog();
});