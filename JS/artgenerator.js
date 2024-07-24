async function loadArt() {
    try {
        const response = await fetch("../JSON/Art.json");
        const images = await response.json();
        displayImages(images);
    } catch (error) {
        console.log("Error loading images:", error);
    }
}

function displayImages(images) {
    const collectionArtDiv = document.getElementById('colectionartdiv');

    const groupedByArtist = {};

    images.forEach(image => {
        if (!groupedByArtist[image.artist]) {
            groupedByArtist[image.artist] = {
                credit: image.credit,
                images: []
            };
        }
        groupedByArtist[image.artist].images.push(image);
    });

    for (const artist in groupedByArtist) {
        const artistInfo = groupedByArtist[artist];

        let frame = document.createElement("div");
        frame.className = "container";

        artistInfo.images.forEach(image => {
            let pic = document.createElement("img");
            pic.src = image.file;
            pic.width = image.width;
            if (image.spoiler) {
                pic.style.filter = "blur(25px)";
                pic.addEventListener("click", () => {
                    pic.style.filter = "none";
                })
            }
            frame.appendChild(pic);
        });

        let des = document.createElement("p");
        des.innerHTML = `This was created by <a target="blank_" href="${artistInfo.credit}">${artist}</a>!`;
        frame.appendChild(des);

        collectionArtDiv.appendChild(frame);
    }
}

loadArt();