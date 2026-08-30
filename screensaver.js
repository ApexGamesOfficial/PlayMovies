const screensaver =
    document.getElementById(
        "playmoviesScreensaver"
    );

const slides =
    document.querySelectorAll(
        ".screensaver-slide"
    );


// ========================================
// SETTINGS
// ========================================

// Use 15 seconds while testing.
// Later we can change this to 3-5 minutes.

const SCREENSAVER_DELAY =
    15000;

const SLIDE_DURATION =
    8000;


// ========================================
// STATE
// ========================================

let inactivityTimer;

let slideTimer;

let currentSlide = 0;

let screensaverActive = false;


// ========================================
// START SCREENSAVER
// ========================================

function startScreensaver() {

    if (screensaverActive) {
        return;
    }

    screensaverActive = true;

    screensaver.classList.add(
        "show"
    );

    currentSlide = 0;

    showSlide(
        currentSlide
    );

    slideTimer =
        setInterval(() => {

            currentSlide =
                (
                    currentSlide + 1
                )
                %
                slides.length;

            showSlide(
                currentSlide
            );

        }, SLIDE_DURATION);

}


// ========================================
// STOP SCREENSAVER
// ========================================

function stopScreensaver() {

    if (!screensaverActive) {
        return;
    }

    screensaverActive = false;

    screensaver.classList.remove(
        "show"
    );

    clearInterval(
        slideTimer
    );

}


// ========================================
// SHOW SLIDE
// ========================================

function showSlide(index) {

    slides.forEach(
        slide => {

            slide.classList.remove(
                "active"
            );

        }
    );

    slides[index]
        ?.classList
        .add(
            "active"
        );

}


// ========================================
// RESET AFK TIMER
// ========================================

function resetScreensaverTimer() {

    if (screensaverActive) {

        stopScreensaver();

    }

    clearTimeout(
        inactivityTimer
    );

    inactivityTimer =
        setTimeout(
            startScreensaver,
            SCREENSAVER_DELAY
        );

}


// ========================================
// USER ACTIVITY
// ========================================

[
    "mousemove",
    "mousedown",
    "keydown",
    "touchstart",
    "scroll"
]
.forEach(eventName => {

    window.addEventListener(
        eventName,
        resetScreensaverTimer,
        {
            passive: true
        }
    );

});


// ========================================
// CONTROLLER SUPPORT
// ========================================

let previousGamepadState = [];


function checkGamepadActivity() {

    const gamepads =
        navigator.getGamepads
            ? navigator.getGamepads()
            : [];


    for (
        const gamepad
        of gamepads
    ) {

        if (!gamepad) {
            continue;
        }


        const currentState =
            gamepad.buttons.map(
                button =>
                    button.pressed
            );


        const buttonPressed =
            currentState.some(
                (
                    pressed,
                    index
                ) =>
                    pressed
                    &&
                    !previousGamepadState[
                        index
                    ]
            );


        const stickMoved =
            gamepad.axes.some(
                axis =>
                    Math.abs(axis)
                    >
                    0.35
            );


        if (
            buttonPressed
            ||
            stickMoved
        ) {

            resetScreensaverTimer();

        }


        previousGamepadState =
            currentState;

    }


    requestAnimationFrame(
        checkGamepadActivity
    );

}


checkGamepadActivity();


// ========================================
// BEGIN TIMER
// ========================================

resetScreensaverTimer();
