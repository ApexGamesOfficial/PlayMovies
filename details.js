const movies = {

    "neon-run": {
        title: "Neon Run",
        year: "2026",
        rating: "PG-13",
        runtime: "2h 8m",

        description:
            "A high-speed sci-fi adventure through a futuristic city where one impossible mission could change everything.",

        genres: [
            "Sci-Fi",
            "Action",
            "Thriller"
        ],

        included: true,

        rent: "$4.99",
        buy: "$14.99",

        cast: [
            {
                name: "Jordan Vale",
                character: "Alex Ryder"
            },
            {
                name: "Maya Cross",
                character: "Nova"
            },
            {
                name: "Ethan Blake",
                character: "Commander Voss"
            },
            {
                name: "Lena Hart",
                character: "Iris"
            }
        ],

        similar: [
            "afterlight",
            "last-signal",
            "static-city"
        ]
    },


    "afterlight": {
        title: "Afterlight",
        year: "2026",
        rating: "TV-14",
        runtime: "1h 52m",

        description:
            "A mysterious transmission draws a group of explorers toward a discovery no one expected to survive.",

        genres: [
            "Sci-Fi",
            "Mystery",
            "Drama"
        ],

        included: true,

        rent: "$3.99",
        buy: "$12.99",

        cast: [
            {
                name: "Avery Stone",
                character: "Mara"
            },
            {
                name: "Noah Reed",
                character: "Eli"
            },
            {
                name: "Camila Frost",
                character: "Dr. Vega"
            }
        ],

        similar: [
            "last-signal",
            "neon-run",
            "deep-horizon"
        ]
    },


    "last-signal": {
        title: "The Last Signal",
        year: "2025",
        rating: "PG-13",
        runtime: "2h 1m",

        description:
            "When the world's final deep-space signal arrives, a small team races to uncover who sent it and why.",

        genres: [
            "Sci-Fi",
            "Adventure",
            "Mystery"
        ],

        included: false,

        rent: "$4.99",
        buy: "$16.99",

        cast: [
            {
                name: "Marcus Lane",
                character: "Daniel Cross"
            },
            {
                name: "Eva North",
                character: "Dr. Riley"
            },
            {
                name: "Theo Grant",
                character: "Mason"
            }
        ],

        similar: [
            "afterlight",
            "deep-horizon",
            "neon-run"
        ]
    },


    "static-city": {
        title: "Static City",
        year: "2025",
        rating: "TV-14",
        runtime: "1h 47m",

        description:
            "A citywide blackout reveals something hidden beneath the streets.",

        genres: [
            "Thriller",
            "Mystery"
        ],

        included: true,

        rent: "$3.99",
        buy: "$11.99",

        cast: [],

        similar: [
            "neon-run",
            "afterlight"
        ]
    },


    "deep-horizon": {
        title: "Deep Horizon",
        year: "2026",
        rating: "PG",
        runtime: "1h 58m",

        description:
            "A voyage beyond the known frontier becomes the adventure of a lifetime.",

        genres: [
            "Adventure",
            "Sci-Fi"
        ],

        included: true,

        rent: "$3.99",
        buy: "$13.99",

        cast: [],

        similar: [
            "last-signal",
            "afterlight"
        ]
    }

};


const params =
    new URLSearchParams(
        window.location.search
    );

const movieId =
    params.get("id")
    ||
    "neon-run";


const movie =
    movies[movieId]
    ||
    movies["neon-run"];


document.title =
    `${movie.title} — PlayMovies`;


document.getElementById(
    "movieTitle"
).textContent =
    movie.title;


document.getElementById(
    "movieYear"
).textContent =
    movie.year;


document.getElementById(
    "movieReleaseYear"
).textContent =
    movie.year;


document.getElementById(
    "movieRating"
).textContent =
    movie.rating;


document.getElementById(
    "movieRatingInfo"
).textContent =
    movie.rating;


document.getElementById(
    "movieRuntime"
).textContent =
    movie.runtime;


document.getElementById(
    "movieDescription"
).textContent =
    movie.description;


document.getElementById(
    "movieGenres"
).textContent =
    movie.genres.join(", ");


document.getElementById(
    "rentButton"
).textContent =
    `Rent ${movie.rent}`;


document.getElementById(
    "buyButton"
).textContent =
    `Buy ${movie.buy}`;


// ========================================
// PLAYMOVIES+ BADGE
// ========================================

const includedBadge =
    document.getElementById(
        "includedBadge"
    );


if (!movie.included) {

    includedBadge.style.display =
        "none";

}


// ========================================
// CAST
// ========================================

const castRow =
    document.getElementById(
        "castRow"
    );


movie.cast.forEach(
    person => {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "cast-card";


        const initial =
            person.name
                .charAt(0)
                .toUpperCase();


        card.innerHTML = `
            <div class="cast-image">
                ${initial}
            </div>

            <div class="cast-info">

                <span class="cast-name">
                    ${person.name}
                </span>

                <span class="cast-character">
                    ${person.character}
                </span>

            </div>
        `;


        castRow.appendChild(
            card
        );

    }
);


// ========================================
// SIMILAR
// ========================================

const similarRow =
    document.getElementById(
        "similarRow"
    );


movie.similar.forEach(
    similarId => {

        const similarMovie =
            movies[similarId];


        if (!similarMovie) {
            return;
        }


        const card =
            document.createElement(
                "a"
            );


        card.className =
            "similar-card";


        card.href =
            `details.html?id=${similarId}`;


        card.innerHTML = `
            <span class="similar-title">
                ${similarMovie.title}
            </span>
        `;


        similarRow.appendChild(
            card
        );

    }
);

// ========================================
// OWNERSHIP / RENTAL
// ========================================

const watchButton =
    document.getElementById("watchButton");

const purchaseArea =
    document.getElementById("purchaseArea");

const rentButton =
    document.getElementById("rentButton");

const buyButton =
    document.getElementById("buyButton");


const OWNED_KEY =
    "playmoviesOwnedTitles";

const RENTED_KEY =
    "playmoviesRentedTitles";


function getStoredTitles(key) {

    return JSON.parse(
        localStorage.getItem(key)
        ||
        "[]"
    );

}


function hasAccessToMovie() {

    const owned =
        getStoredTitles(OWNED_KEY);

    const rented =
        getStoredTitles(RENTED_KEY);


    return (
        owned.includes(movieId)
        ||
        rented.includes(movieId)
    );

}


function updatePurchaseUI() {

    const hasAccess =
        hasAccessToMovie();


    if (hasAccess) {

        watchButton.style.display =
            "inline-flex";

        purchaseArea.style.display =
            "none";

    }

    else {

        watchButton.style.display =
            "none";

        purchaseArea.style.display =
            "flex";

    }

}


rentButton.addEventListener(
    "click",
    () => {

        const rented =
            getStoredTitles(RENTED_KEY);

        if (!rented.includes(movieId)) {

            rented.push(movieId);

            localStorage.setItem(
                RENTED_KEY,
                JSON.stringify(rented)
            );

        }

        updatePurchaseUI();

    }
);


buyButton.addEventListener(
    "click",
    () => {

        const owned =
            getStoredTitles(OWNED_KEY);

        if (!owned.includes(movieId)) {

            owned.push(movieId);

            localStorage.setItem(
                OWNED_KEY,
                JSON.stringify(owned)
            );

        }

        updatePurchaseUI();

    }
);


updatePurchaseUI();

// ========================================
// TRAILER
// ========================================

const trailerModal =
    document.getElementById(
        "trailerModal"
    );


document.getElementById(
    "trailerTitle"
).textContent =
    `${movie.title} Trailer`;


document.getElementById(
    "trailerButton"
)
.addEventListener(
    "click",
    () => {

        trailerModal.classList.add(
            "show"
        );

    }
);


document.getElementById(
    "closeTrailer"
)
.addEventListener(
    "click",
    () => {

        trailerModal.classList.remove(
            "show"
        );

    }
);


// ========================================
// MY LIST
// ========================================

const myListButton =
    document.getElementById(
        "myListButton"
    );


myListButton.addEventListener(
    "click",
    () => {

        const existing =
            JSON.parse(
                localStorage.getItem(
                    "playmoviesMyList"
                )
                ||
                "[]"
            );


        if (!existing.includes(movieId)) {

            existing.push(
                movieId
            );

            localStorage.setItem(
                "playmoviesMyList",
                JSON.stringify(
                    existing
                )
            );

            myListButton.textContent =
                "✓ In My List";

        }

    }
);
