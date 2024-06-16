let main = parent.document.getElementById("mainframe");

$(art).click(function () { 
    $(main).attr("src", "legacy/HTML/art.html");
});

$(life).click(function () { 
    $(main).attr("src", "legacy/HTML/life.html")
}); 