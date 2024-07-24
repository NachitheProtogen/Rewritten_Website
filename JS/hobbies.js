async function loadpage() { //loads the blog json
    try {
        const response = await fetch("../JSON/hobbies.json");
        const hobby = await response.json();
        nachihobbies(hobby);
    } catch (error) {
        console.log("Error loading images:", error);
    }
}

function nachihobbies(hobbyjson) { //loads the blogs onto the HTML
    const hobbydiv = document.getElementById("colectiondiv");

    hobbyjson.forEach(hobby => {
        let container = document.createElement("div")
        container.className = "container";
        container.addEventListener("click", () => {
            let main = parent.document.getElementById("mainframe");

            $(main).attr("src", hobby.src);
        })
        $(hobbydiv).append(container);
        
        let title = document.createElement("h1");
        title.innerHTML = hobby.title;

        let description = document.createElement("p");
        description.innerHTML = hobby.description;

        $(container).append(title);
        if(hobby.image != ""){ //adding a picture if included
            let image = document.createElement("img");
            image.src = hobby.image;
            image.width = 300;
            
            $(container).append(image);
        } else {
            return;
        };
        
        $(container).append(description);

    });
}

$(document).ready(function () {
    loadpage();
});