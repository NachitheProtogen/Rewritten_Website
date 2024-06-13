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
    const singleArtDiv = document.getElementById('singleartdiv');
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
            frame.appendChild(pic);
        });

        let des = document.createElement("p");
        des.innerHTML = `This was created by <a href="${artistInfo.credit}">${artist}</a>!`;
        frame.appendChild(des);

        collectionArtDiv.appendChild(frame);
    }
}

loadArt();