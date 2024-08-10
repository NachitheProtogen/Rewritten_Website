async function loadStory() {
    try {
        const response = await fetch("../JSON/Story.json");
        const chapters = await response.json();
        displayStory(chapters);
    } catch (error) {
        console.log("Error loading story:", error);
    }
}



$(document).ready(function () {
    loadStory();
});