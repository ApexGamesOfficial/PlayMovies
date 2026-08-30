const profileScreen = document.getElementById("profileScreen");
const loadingScreen = document.getElementById("loadingScreen");
const transitionScreen = document.getElementById("transitionScreen");

const profileCards = document.querySelectorAll(".profile-card");
const addProfileButton = document.getElementById("addProfileButton");
const manageProfilesButton = document.getElementById("manageProfilesButton");

let transitionStarted = false;


/* =========================================
   PROFILE SELECTION
   ========================================= */

profileCards.forEach((card) => {

    card.addEventListener("click", () => {

        if (transitionStarted) return;

        if (card.id === "addProfileButton") {
            return;
        }

        const profileName =
            card.dataset.profile || "Profile";

        selectProfile(profileName);

    });

});


function selectProfile(profileName) {

    transitionStarted = true;

    localStorage.setItem(
        "playmoviesActiveProfile",
        profileName
    );

    profileScreen.classList.add("fade-out");

    setTimeout(() => {

        showLoadingScreen();

    }, 300);

}


/* =========================================
   LOADING SCREEN
   ========================================= */

function showLoadingScreen() {

    loadingScreen.classList.add("show");

    loadingScreen.setAttribute(
        "aria-hidden",
        "false"
    );

    /*
        Fake loading delay for now.

        Later, this is where we can actually
        wait for account/profile data from
        Supabase before continuing.
    */

    setTimeout(() => {

        startClapperTransition();

    }, 1800);

}


/* =========================================
   CLAPPER TRANSITION
   ========================================= */

function startClapperTransition() {

    loadingScreen.classList.remove("show");

    loadingScreen.setAttribute(
        "aria-hidden",
        "true"
    );

    transitionScreen.classList.add(
        "show",
        "play"
    );

    transitionScreen.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
        Small delay before the clapper
        hits so the animation feels natural.
    */

    setTimeout(() => {

        playClapperSound();

    }, 900);


    /*
        Redirect after the clapper exits.
    */

    setTimeout(() => {

        window.location.href =
            "index.html";

    }, 2450);

}


/* =========================================
   CLAPPER SOUND
   ========================================= */

function playClapperSound() {

    /*
        For now this creates a tiny original
        click/clap-style sound directly in
        the browser.

        Later we can replace this with an
        original PlayMovies sound file.
    */

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) return;

        const audioContext =
            new AudioContext();


        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();


        oscillator.type =
            "square";

        oscillator.frequency.setValueAtTime(
            150,
            audioContext.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            65,
            audioContext.currentTime + 0.08
        );


        gain.gain.setValueAtTime(
            0.12,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 0.10
        );


        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );


        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + 0.10
        );


        setTimeout(() => {

            audioContext.close();

        }, 250);

    }

    catch (error) {

        console.log(
            "PlayMovies clapper sound unavailable."
        );

    }

}


/* =========================================
   ADD PROFILE
   ========================================= */

addProfileButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        alert(
            "Add Profile is coming next."
        );

    }
);


/* =========================================
   MANAGE PROFILES
   ========================================= */

manageProfilesButton.addEventListener(
    "click",
    () => {

        alert(
            "Manage Profiles is coming soon."
        );

    }
);


/* =========================================
   KEYBOARD / TV REMOTE NAVIGATION
   ========================================= */

const selectableProfiles =
    Array.from(
        document.querySelectorAll(
            ".profile-card"
        )
    );


document.addEventListener(
    "keydown",
    (event) => {

        const active =
            document.activeElement;

        const currentIndex =
            selectableProfiles.indexOf(
                active
            );


        if (
            event.key === "ArrowRight" &&
            currentIndex !== -1
        ) {

            event.preventDefault();

            const nextIndex =
                Math.min(
                    currentIndex + 1,
                    selectableProfiles.length - 1
                );

            selectableProfiles[
                nextIndex
            ].focus();

        }


        if (
            event.key === "ArrowLeft" &&
            currentIndex !== -1
        ) {

            event.preventDefault();

            const previousIndex =
                Math.max(
                    currentIndex - 1,
                    0
                );

            selectableProfiles[
                previousIndex
            ].focus();

        }


        if (
            event.key === "ArrowDown" &&
            currentIndex !== -1
        ) {

            event.preventDefault();

            manageProfilesButton.focus();

        }


        if (
            event.key === "ArrowUp" &&
            active === manageProfilesButton
        ) {

            event.preventDefault();

            selectableProfiles[0].focus();

        }


        if (event.key === "Escape") {

            if (!transitionStarted) {

                window.location.href =
                    "welcome.html";

            }

        }

    }
);


/* =========================================
   INITIAL FOCUS FOR TV
   ========================================= */

window.addEventListener(
    "load",
    () => {

        if (
            selectableProfiles.length > 0
        ) {

            selectableProfiles[0].focus();

        }

    }
);
