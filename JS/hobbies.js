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
    const hobbydiv = document.getElementById("colectiondiv"); //Ever considerd how fucked up it is that I only use this to vent my frustration?

    hobbyjson.forEach(hobby => {                               //I will just remind myself in this codebase that maybe I should encourage doing stuff to be happy
        let container = document.createElement("div")          //Or writing a blog about more happy thoughts, or maybe just a blog about how to be happy
        container.className = "container";                     //I mean, I am not happy, but I am not sad either, I am just... here
        container.addEventListener("click", () => {            //Maybe I will writte a better blog sometimes haha
            let main = parent.document.getElementById("mainframe");

            $(main).attr("src", hobby.src);                     //Actually maybe I'm just insane lol
        })                                                      //I hope whoever ever reads this has a good day
        $(hobbydiv).append(container);                          //I hope you are happy, and if you are not, I hope you will be soon
        
        let title = document.createElement("h1");               //I hope you will find something that makes you happy
        title.innerHTML = hobby.title;                          //Idk i might post this somewhere...

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