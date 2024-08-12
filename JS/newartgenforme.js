async function loadArt() {
    try {
        const response = await fetch("../JSON/myArt.json");
        const images = await response.json();
        displayImages(images);
    } catch (error) {
        console.log("Error loading images:", error);
    }
}

function displayImages(images) {
    const collectionArtDiv = document.getElementById('colectionartdiv');


    let frame = document.createElement("div");
    frame.className = "container";

    images.forEach(image => {
            let pic = document.createElement("img");
            pic.src = image.file;
            pic.width = image.width;

        frame.appendChild(pic);
    });

    collectionArtDiv.appendChild(frame);
}

loadArt();