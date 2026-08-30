// ========================================
// PLAYMOVIES + SUPABASE
// ========================================

const SUPABASE_URL =
    "https://hweqdmphmepfycfmwblz.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_ir_XW-4pWIC1kFsIicGRAA_HHTKQxVS";

const supabaseClient =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// ========================================
// PAGE ELEMENTS
// ========================================

const profileScreen =
    document.getElementById("profileScreen");

const loadingScreen =
    document.getElementById("loadingScreen");

const transitionScreen =
    document.getElementById("transitionScreen");

const addProfileButton =
    document.getElementById("addProfileButton");

const manageProfilesButton =
    document.getElementById("manageProfilesButton");

let transitionStarted = false;


// ========================================
// LOAD LOGGED-IN ACCOUNT
// ========================================

async function loadAccount() {

    try {

        const {
            data: { user },
            error
        } =
            await supabaseClient.auth.getUser();


        if (error || !user) {

            // Nobody is logged in.
            // Send them back to login.

            window.location.href =
                "login.html";

            return;
        }


        const metadata =
            user.user_metadata || {};


        const displayName =
            metadata.display_name ||
            metadata.first_name ||
            "Profile";


        const firstName =
            metadata.first_name ||
            displayName;


        // --------------------------------
        // CHANGE FIRST PROFILE
        // --------------------------------

        const firstProfile =
            document.querySelector(
                '.profile-card[data-profile="Alex"]'
            );


        if (firstProfile) {

            firstProfile.dataset.profile =
                displayName;


            const profileName =
                firstProfile.querySelector(
                    ".profile-name"
                );


            if (profileName) {

                profileName.textContent =
                    displayName;

            }


            const avatar =
                firstProfile.querySelector(
                    ".profile-avatar"
                );


            if (avatar) {

                avatar.textContent =
                    displayName
                        .charAt(0)
                        .toUpperCase();

            }

        }


        // --------------------------------
        // WELCOME MESSAGE
        // --------------------------------

        const welcomeText =
            document.querySelector(
                ".welcome-text"
            );


        if (welcomeText) {

            welcomeText.textContent =
                `WELCOME BACK, ${firstName.toUpperCase()}`;

        }


        // Store basic account information
        // for other PlayMovies pages.

        localStorage.setItem(
            "playmoviesAccountName",
            displayName
        );


        localStorage.setItem(
            "playmoviesAccountEmail",
            user.email || ""
        );


        // Now that the account is loaded,
        // activate the profile buttons.

        setupProfileSelection();

    }

    catch (error) {

        console.error(
            "Could not load PlayMovies account:",
            error
        );

        window.location.href =
            "login.html";

    }

}


// ========================================
// PROFILE SELECTION
// ========================================

function setupProfileSelection() {

    const profileCards =
        document.querySelectorAll(
            ".profile-card"
        );


    profileCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                if (transitionStarted) {
                    return;
                }


                if (
                    card.id ===
                    "addProfileButton"
                ) {

                    return;

                }


                const profileName =
                    card.dataset.profile ||
                    "Profile";


                selectProfile(
                    profileName
                );

            }
        );

    });

}


function selectProfile(profileName) {

    transitionStarted = true;


    localStorage.setItem(
        "playmoviesActiveProfile",
        profileName
    );


    profileScreen.classList.add(
        "fade-out"
    );


    setTimeout(() => {

        showLoadingScreen();

    }, 300);

}


// ========================================
// LOADING SCREEN
// ========================================

function showLoadingScreen() {

    loadingScreen.classList.add(
        "show"
    );


    loadingScreen.setAttribute(
        "aria-hidden",
        "false"
    );


    setTimeout(() => {

        startClapperTransition();

    }, 1800);

}


// ========================================
// CLAPPER TRANSITION
// ========================================

function startClapperTransition() {

    loadingScreen.classList.remove(
        "show"
    );


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


    setTimeout(() => {

        playClapperSound();

    }, 900);


    setTimeout(() => {

        window.location.href =
            "index.html";

    }, 2450);

}


// ========================================
// CLAPPER SOUND
// ========================================

function playClapperSound() {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;


        if (!AudioContext) {
            return;
        }


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


        oscillator.frequency
            .exponentialRampToValueAtTime(
                65,
                audioContext.currentTime + 0.08
            );


        gain.gain.setValueAtTime(
            0.12,
            audioContext.currentTime
        );


        gain.gain
            .exponentialRampToValueAtTime(
                0.001,
                audioContext.currentTime + 0.10
            );


        oscillator.connect(
            gain
        );


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


// ========================================
// ADD PROFILE
// ========================================

if (addProfileButton) {

    addProfileButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            alert(
                "Add Profile is coming next."
            );

        }
    );

}


// ========================================
// MANAGE PROFILES
// ========================================

if (manageProfilesButton) {

    manageProfilesButton.addEventListener(
        "click",
        () => {

            alert(
                "Manage Profiles is coming soon."
            );

        }
    );

}


// ========================================
// KEYBOARD / TV REMOTE NAVIGATION
// ========================================

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


        if (
            event.key === "Escape" &&
            !transitionStarted
        ) {

            window.location.href =
                "welcome.html";

        }

    }
);


// ========================================
// START PLAYMOVIES
// ========================================

window.addEventListener(
    "load",
    async () => {

        await loadAccount();


        if (
            selectableProfiles.length > 0
        ) {

            selectableProfiles[0].focus();

        }

    }
);
