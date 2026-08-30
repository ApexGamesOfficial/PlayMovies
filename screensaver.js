const screensaver =
    document.getElementById("playmoviesScreensaver");

const slides =
    Array.from(
        document.querySelectorAll(".screensaver-slide")
    );

let inactivityTimer = null;
let slideTimer = null;

let currentSlide = 0;
let screensaverActive = false;


// TEST:
// Start after 5 seconds
const SCREENSAVER_DELAY = 5000;

// Change movie every 4 seconds
const SLIDE_DURATION = 4000;


function showSlide(index) {

    slides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === index
        );

    });

}


function nextSlide() {

    if (slides.length < 2) {
        return;
    }

    currentSlide =
        (currentSlide + 1)
        % slides.length;

    showSlide(currentSlide);

}


function startScreensaver() {

    if (!screensaver) {
        return;
    }

    if (slides.length === 0) {
        return;
    }

    screensaverActive = true;

    currentSlide = 0;

    showSlide(currentSlide);

    screensaver.classList.add("show");


    clearInterval(slideTimer);

    slideTimer =
        setInterval(
            nextSlide,
            SLIDE_DURATION
        );

}


function stopScreensaver() {

    if (!screensaverActive) {
        return;
    }

    screensaverActive = false;

    screensaver.classList.remove("show");

    clearInterval(slideTimer);

}


function resetTimer() {

    clearTimeout(inactivityTimer);

    if (screensaverActive) {
        stopScreensaver();
    }

    inactivityTimer =
        setTimeout(
            startScreensaver,
            SCREENSAVER_DELAY
        );

}


[
    "mousemove",
    "mousedown",
    "keydown",
    "touchstart"
].forEach(eventName => {

    window.addEventListener(
        eventName,
        resetTimer,
        { passive: true }
    );

});


window.addEventListener("load", () => {

    console.log(
        "Screensaver slides found:",
        slides.length
    );

    resetTimer();

});
