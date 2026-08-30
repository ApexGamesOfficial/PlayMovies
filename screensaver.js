const screensaver = document.getElementById("playmoviesScreensaver");

let inactivityTimer;

function startScreensaver() {
    console.log("Starting PlayMovies screensaver");

    if (!screensaver) {
        console.log("Screensaver element not found");
        return;
    }

    screensaver.classList.add("show");
}

function stopScreensaver() {
    if (!screensaver) return;

    screensaver.classList.remove("show");
}

function resetTimer() {
    clearTimeout(inactivityTimer);

    if (screensaver?.classList.contains("show")) {
        stopScreensaver();
    }

    inactivityTimer = setTimeout(
        startScreensaver,
        5000
    );
}

window.addEventListener("load", () => {
    resetTimer();
});

[
    "mousemove",
    "mousedown",
    "keydown",
    "touchstart"
].forEach(event => {
    window.addEventListener(
        event,
        resetTimer,
        { passive: true }
    );
});
