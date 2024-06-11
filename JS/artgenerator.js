function CreateSingle() { //Creates a single frame for an Artpiece
    const images = [
        
    ];
    images.forEach(image => {
        let pic = document.createElement("img");
        let des = document.createElement("p");
        let frame = document.createElement("div");

        pic.src = image.file;
        pic.width = image.width;
        
        des.innerHTML = `This was created by <a href="${image.credit}">${image.artist}</a>!`;
        
        frame.className = "container";

        artdiv.appendChild(frame);
        frame.appendChild(pic);
        frame.appendChild(des);
    });
}

function createColection() { //Creates a Collection of Images in a single frame
    const images = [
        {file: "../IMG/2_-_proto_png.png", width: "200", artist: "Idrael", credit: "https://idrael.carrd.co"},
        {file: "../IMG/30.12_-_shadow_nachi_animation.gif", width: "200", artist: "Kir0nixx_", credit: "https://x.com/Kir0nixx_"},
        {file: "../IMG/06.12_-_shadow_nachi_ref.png", width: "200", artist: "Kir0nixx_", credit: "https://x.com/Kir0nixx_"},
    ]

    const groupedByArtist = {};

    // Group images by artist
    images.forEach(image => {
        if (!groupedByArtist[image.artist]) {
            groupedByArtist[image.artist] = {
                credit: image.credit,
                images: []
            };
        }
        groupedByArtist[image.artist].images.push(image.file);
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

        artdiv.appendChild(frame);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    CreateSingle();
    createColection();
})