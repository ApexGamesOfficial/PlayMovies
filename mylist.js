const STORAGE_KEY = "playmoviesMyList";

const savedGrid =
    document.getElementById("savedGrid");

const emptyState =
    document.getElementById("emptyState");

const savedCount =
    document.getElementById("savedCount");

const filterButtons =
    [...document.querySelectorAll(".filter-button")];

let activeFilter = "all";


/* =========================
   GET LIST
========================= */

function getMyList() {

    const saved =
        localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return [];
    }

    try {
        return JSON.parse(saved);
    } catch {
        return [];
    }

}


/* =========================
   SAVE LIST
========================= */

function saveMyList(list) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(list)
    );

}


/* =========================
   REMOVE TITLE
========================= */

function removeTitle(id) {

    const list =
        getMyList().filter(
            item => item.id !== id
        );

    saveMyList(list);

    renderList();

}


/* =========================
   CREATE CARD
========================= */

function createCard(item) {

    const card =
        document.createElement("article");

    card.className = "saved-card";

    if (item.art) {
        card.style.background = item.art;
    }


    const typeText =
        item.type === "show"
            ? "TV SHOW"
            : "MOVIE";


    card.innerHTML = `

        <span class="type-badge">
            ${typeText}
        </span>

        <button
            class="remove-button"
            type="button"
            aria-label="Remove ${item.title} from My List"
        >
            ✕
        </button>

        <div class="saved-card-info">

            <strong>
                ${item.title}
            </strong>

            <span>
                ${item.meta || ""}
            </span>

        </div>

    `;


    const removeButton =
        card.querySelector(
            ".remove-button"
        );


    removeButton.addEventListener(
        "click",
        () => removeTitle(item.id)
    );


    return card;

}


/* =========================
   RENDER
========================= */

function renderList() {

    const list = getMyList();


    const filteredList =
        activeFilter === "all"
            ? list
            : list.filter(
                item =>
                    item.type === activeFilter
            );


    savedGrid.innerHTML = "";


    filteredList.forEach(item => {

        savedGrid.appendChild(
            createCard(item)
        );

    });


    savedCount.textContent =
        `${filteredList.length} ${
            filteredList.length === 1
                ? "title"
                : "titles"
        }`;


    if (filteredList.length === 0) {

        savedGrid.style.display =
            "none";

        emptyState.classList.add(
            "visible"
        );

    } else {

        savedGrid.style.display =
            "grid";

        emptyState.classList.remove(
            "visible"
        );

    }

}


/* =========================
   FILTER BUTTONS
========================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
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


            renderList();

        }
    );

});


renderList();
