let main = parent.document.getElementById("mainframe");

$(paint).click(function () { 
    $(main).attr("src", "/LEGACY/HTML/art.html");
});

$(life).click(function () {
    $(main).attr("src", "/LEGACY/HTML/life.html");
})