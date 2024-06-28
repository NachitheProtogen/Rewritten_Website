let main = parent.document.getElementById("mainframe");

$(paint).click(function () { 
    $(main).attr("src", "legacy/HTML/art.html");
});

$(life).click(function () { 
    $(main).attr("src", "legacy/HTML/life.html");
}); 