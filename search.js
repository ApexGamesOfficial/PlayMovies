const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const resetSearch =
    document.getElementById("resetSearch");

const cards =
    [...document.querySelectorAll(".result-card")];

const quickButtons =
    [...document.querySelectorAll(".quick-button")];

const resultCount =
    document.getElementById("resultCount");

const resultsTitle =
    document.getElementById("resultsTitle");

const noResults =
    document.getElementById("noResults");

const resultsGrid =
    document.getElementById("resultsGrid");


let activeFilter = "all";


/* =========================
   SEARCH
========================= */

function runSearch() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();

    let visibleCount = 0;


    cards.forEach(card => {

        const title =
            card.dataset.title
                .toLowerCase();

        const year =
            card.dataset.year
                .toLowerCase();

        const rating =
            card.dataset.rating
                .toLowerCase();

        const genre =
            card.dataset.genre
                .toLowerCase();

        const service =
            card.dataset.service
                .toLowerCase();


        const searchableText =
            `${title} ${year} ${rating} ${genre} ${service}`;


        const matchesSearch =
            searchableText.includes(search);


        const matchesFilter =
            activeFilter === "all" ||
            genre.includes(activeFilter) ||
            service.includes(activeFilter);


        if (
            matchesSearch &&
            matchesFilter
        ) {

            card.classList.remove("hidden");

            visibleCount++;

        } else {

            card.classList.add("hidden");

        }

    });


    updatePage(
        search,
        visibleCount
    );

}


/* =========================
   UPDATE UI
========================= */

function updatePage(
    search,
    visibleCount
) {

    resultCount.textContent =
        `${visibleCount} ${
            visibleCount === 1
                ? "title"
                : "titles"
        }`;


    if (search) {

        resultsTitle.textContent =
            `Results for "${searchInput.value.trim()}"`;

        clearSearch.classList.add(
            "visible"
        );

    } else if (
        activeFilter !== "all"
    ) {

        const selectedButton =
            quickButtons.find(
                button =>
                    button.dataset.filter ===
                    activeFilter
            );

        resultsTitle.textContent =
            selectedButton
                ? selectedButton.textContent.trim()
                : "Results";

        clearSearch.classList.remove(
            "visible"
        );

    } else {

        resultsTitle.textContent =
            "Explore PlayMovies";

        clearSearch.classList.remove(
            "visible"
        );

    }


    if (visibleCount === 0) {

        resultsGrid.style.display =
            "none";

        noResults.classList.add(
            "visible"
        );

    } else {

        resultsGrid.style.display =
            "grid";

        noResults.classList.remove(
            "visible"
        );

    }

}


/* =========================
   INPUT
========================= */

searchInput.addEventListener(
    "input",
    runSearch
);


/* =========================
   CLEAR SEARCH
========================= */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        runSearch();

        searchInput.focus();

    }
);


/* =========================
   QUICK FILTERS
========================= */

quickButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            quickButtons.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );


            button.classList.add(
                "active"
            );


            activeFilter =
                button.dataset.filter;


            runSearch();

        }
    );

});


/* =========================
   RESET
========================= */

resetSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        activeFilter = "all";


        quickButtons.forEach(
            button =>
                button.classList.remove(
                    "active"
                )
        );


        quickButtons[0].classList.add(
            "active"
        );


        runSearch();

        searchInput.focus();

    }
);


/* =========================
   KEYBOARD SHORTCUT
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "/" &&
            document.activeElement !==
            searchInput
        ) {

            event.preventDefault();

            searchInput.focus();

        }


        if (
            event.key === "Escape" &&
            document.activeElement ===
            searchInput
        ) {

            searchInput.value = "";

            runSearch();

            searchInput.blur();

        }

    }
);


/* =========================
   START PAGE
========================= */

runSearch();
