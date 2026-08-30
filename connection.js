// ========================================
// PLAYMOVIES SERVICE WORKER
// ========================================

async function registerPlayMoviesServiceWorker() {
    if (!("serviceWorker" in navigator)) {
        console.log("Service Workers are not supported.");
        return;
    }

    try {
        const registration =
            await navigator.serviceWorker.register(
                "./service-worker.js",
                {
                    scope: "./"
                }
            );

        console.log(
            "PlayMovies Service Worker registered:",
            registration.scope
        );

    } catch (error) {
        console.error(
            "PlayMovies Service Worker registration failed:",
            error
        );
    }
}

registerPlayMoviesServiceWorker();
// ========================================
// PLAYMOVIES CONNECTION SYSTEM
// ========================================

const CONNECTION_TEST =
    "https://hweqdmphmepfycfmwblz.supabase.co/rest/v1/";

const CONNECTION_TIMEOUT = 5000;


// ----------------------------------------
// TEST REAL CONNECTION
// ----------------------------------------

async function testPlayMoviesConnection() {

    const controller = new AbortController();

    const timeout = setTimeout(() => {
        controller.abort();
    }, CONNECTION_TIMEOUT);

    try {

        await fetch(CONNECTION_TEST, {
            method: "HEAD",
            cache: "no-store",
            signal: controller.signal
        });

        clearTimeout(timeout);

        // A response means the PlayMovies backend
        // was reachable.
        return true;

    } catch (error) {

        clearTimeout(timeout);

        return false;
    }
}


// ----------------------------------------
// STARTUP
// ----------------------------------------

async function checkStartupConnection() {

    // If browser already knows we're offline,
    // immediately begin PlayMovies loading.

    if (!navigator.onLine) {
        showConnectionLoading();
        await retryConnectionLoop();
        return;
    }


    // Internet appears available.
    // Don't show loading screen.

    const connected =
        await testPlayMoviesConnection();


    if (!connected) {

        showConnectionLoading();

        await retryConnectionLoop();
    }
}


// ----------------------------------------
// LOADING SCREEN
// ----------------------------------------

function showConnectionLoading() {

    document
        .getElementById("connectionLoading")
        ?.classList.add("show");

}


function hideConnectionLoading() {

    document
        .getElementById("connectionLoading")
        ?.classList.remove("show");

}


// ----------------------------------------
// RETRY FOR A LITTLE WHILE
// ----------------------------------------

async function retryConnectionLoop() {

    const attempts = 3;

    for (
        let attempt = 0;
        attempt < attempts;
        attempt++
    ) {

        const connected =
            await testPlayMoviesConnection();


        if (connected) {

            hideConnectionLoading();
            hideOfflineScreen();

            window.location.reload();

            return;
        }


        await new Promise(resolve =>
            setTimeout(resolve, 1500)
        );
    }


    hideConnectionLoading();

    showOfflineScreen();
}


// ----------------------------------------
// OFFLINE SCREEN
// ----------------------------------------

function showOfflineScreen() {

    document
        .getElementById("offlineScreen")
        ?.classList.add("show");

}


function hideOfflineScreen() {

    document
        .getElementById("offlineScreen")
        ?.classList.remove("show");

}


// ----------------------------------------
// RETRY BUTTON
// ----------------------------------------

const retryButton =
    document.getElementById("retryConnection");


retryButton?.addEventListener(
    "click",
    async () => {

        hideOfflineScreen();

        showConnectionLoading();

        await retryConnectionLoop();

    }
);


// ----------------------------------------
// DOWNLOADS BUTTON
// ----------------------------------------

const downloadsButton =
    document.getElementById("offlineDownloads");


downloadsButton?.addEventListener(
    "click",
    () => {

        // We'll build the real offline
        // downloads library later.

        alert(
            "Offline Downloads will appear here once PlayMovies downloads are connected."
        );

    }
);


// ----------------------------------------
// AUTOMATIC RECONNECTION
// ----------------------------------------

window.addEventListener(
    "online",
    async () => {

        const connected =
            await testPlayMoviesConnection();


        if (connected) {

            window.location.reload();

        }

    }
);


// ----------------------------------------
// BEGIN
// ----------------------------------------

window.addEventListener(
    "load",
    checkStartupConnection
);
