const screensaver =
    document.getElementById("playmoviesScreensaver");

const slides =
    document.querySelectorAll(".screensaver-slide");

let inactivityTimer;
let slideTimer;

let currentSlide = 0;
let screensaverActive = false;


// ========================================
// TEST SETTINGS
// ========================================

// Screensaver starts after 5 seconds for testing
const SCREENSAVER_DELAY = 5000;

// Switch movie every 6 seconds
const SLIDE_DURATION = 6000;


// ========================================
// SHOW A SLIDE
// ========================================

function showSlide(index) {

    slides.forEach((slide, i) => {

        if (i === index) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }

    });

}


// ========================================
// NEXT MOVIE
// ========================================

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}


// ========================================
// START SCREENSAVER
// ========================================

function startScreensaver() {

    if (!screensaver || slides.length === 0) {
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


// ========================================
// STOP SCREENSAVER
// ========================================

function stopScreensaver() {

    if (!screensaverActive) {
        return;
    }

    screensaverActive = false;

    screensaver.classList.remove("show");

    clearInterval(slideTimer);

}


// ========================================
// RESET AFK TIMER
// ========================================

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


// ========================================
// ACTIVITY
// ========================================

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


// ========================================
// START TIMER
// ========================================

window.addEventListener("load", () => {
    resetTimer();
});
