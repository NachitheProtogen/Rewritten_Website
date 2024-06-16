let main = parent.document.getElementById("mainframe");

$(paint).click(function () { 
    $(main).attr("src", "/old/HTML/art.html");
});

$(life).click(function () {
    $(main).attr("src", "/old/HTML/life.html");
})