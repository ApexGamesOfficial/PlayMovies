const screensaver =
    document.getElementById("playmoviesScreensaver");

const slides =
    Array.from(
        document.querySelectorAll(".screensaver-slide")
    );

const SCREENSAVER_DELAY = 5000;
const SLIDE_DURATION = 4000;

let inactivityTimer = null;
let slideTimer = null;
let currentSlide = 0;
let screensaverActive = false;


// ========================================
// SET UP SLIDES
// ========================================

slides.forEach((slide, index) => {

    slide.style.position = "absolute";
    slide.style.inset = "0";

    slide.style.opacity =
        index === 0 ? "1" : "0";

    slide.style.visibility =
        index === 0 ? "visible" : "hidden";

    slide.style.transition =
        "opacity 1.3s ease";

});


// ========================================
// SHOW SLIDE
// ========================================

function showSlide(index) {

    slides.forEach((slide, i) => {

        if (i === index) {

            slide.style.visibility =
                "visible";

            slide.style.opacity =
                "1";

        } else {

            slide.style.opacity =
                "0";

            setTimeout(() => {

                if (i !== currentSlide) {

                    slide.style.visibility =
                        "hidden";

                }

            }, 1300);

        }

    });

}


// ========================================
// NEXT SLIDE
// ========================================

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}


// ========================================
// START
// ========================================

function startScreensaver() {

    if (
        screensaverActive ||
        !screensaver ||
        slides.length === 0
    ) {
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
// STOP
// ========================================

function stopScreensaver() {

    if (!screensaverActive) {
        return;
    }

    screensaverActive = false;

    screensaver.classList.remove("show");

    clearInterval(slideTimer);

    slideTimer = null;

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

resetTimer();
