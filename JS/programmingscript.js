let main = parent.document.getElementById("mainframe");

$(paint).click(function () { 
    $(main).attr("src", "/HTML/art.html");
});

$(life).click(function () {
    $(main).attr("src", "/HTML/life.html");
});