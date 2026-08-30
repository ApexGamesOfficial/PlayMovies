const searchButton = document.getElementById("searchButton");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {

    searchPanel.classList.add("open");

    setTimeout(() => {
        searchInput.focus();
    }, 100);

});

closeSearch.addEventListener("click", () => {

    searchPanel.classList.remove("open");

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        searchPanel.classList.remove("open");
    }

});
