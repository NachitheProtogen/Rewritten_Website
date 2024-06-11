function CreateSingle() { //Creates a single frame for an Artpiece
    const images = [
        {file: "../IMG/30.12_-_shadow_nachi_animation.gif", width: "200", artist: "Kir0nixx_", credit: "https://x.com/Kir0nixx_"},
        {file: "../IMG/2_-_proto_png.png", width: "200", artist: "Idrael", credit: "https://idrael.carrd.co/"},
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
    
}

document.addEventListener("DOMContentLoaded", () => {
    CreateSingle();
})