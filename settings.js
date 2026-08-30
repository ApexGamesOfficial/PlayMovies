const SETTINGS_KEY = "playmoviesSettings";


const defaultSettings = {

    autoplayNext: true,

    autoplayPreviews: true,

    defaultSubtitles: false,

    playbackQuality: "auto",

    preferredLanguage: "english",

    reducedMotion: false,

    emailNotifications: true

};


const autoplayNext =
    document.getElementById("autoplayNext");

const autoplayPreviews =
    document.getElementById("autoplayPreviews");

const defaultSubtitles =
    document.getElementById("defaultSubtitles");

const playbackQuality =
    document.getElementById("playbackQuality");

const preferredLanguage =
    document.getElementById("preferredLanguage");

const reducedMotion =
    document.getElementById("reducedMotion");

const emailNotifications =
    document.getElementById("emailNotifications");

const saveSettings =
    document.getElementById("saveSettings");

const saveStatus =
    document.getElementById("saveStatus");


function getSettings() {

    try {

        const saved =
            localStorage.getItem(SETTINGS_KEY);


        if (!saved) {

            return {
                ...defaultSettings
            };

        }


        return {

            ...defaultSettings,

            ...JSON.parse(saved)

        };

    }

    catch (error) {

        console.error(
            "Could not load PlayMovies settings:",
            error
        );


        return {
            ...defaultSettings
        };

    }

}


function loadSettings() {

    const settings =
        getSettings();


    autoplayNext.checked =
        settings.autoplayNext;


    autoplayPreviews.checked =
        settings.autoplayPreviews;


    defaultSubtitles.checked =
        settings.defaultSubtitles;


    playbackQuality.value =
        settings.playbackQuality;


    preferredLanguage.value =
        settings.preferredLanguage;


    reducedMotion.checked =
        settings.reducedMotion;


    emailNotifications.checked =
        settings.emailNotifications;


    applyReducedMotion(
        settings.reducedMotion
    );

}


function collectSettings() {

    return {

        autoplayNext:
            autoplayNext.checked,

        autoplayPreviews:
            autoplayPreviews.checked,

        defaultSubtitles:
            defaultSubtitles.checked,

        playbackQuality:
            playbackQuality.value,

        preferredLanguage:
            preferredLanguage.value,

        reducedMotion:
            reducedMotion.checked,

        emailNotifications:
            emailNotifications.checked

    };

}


function saveUserSettings() {

    const settings =
        collectSettings();


    localStorage.setItem(

        SETTINGS_KEY,

        JSON.stringify(settings)

    );


    applyReducedMotion(
        settings.reducedMotion
    );


    saveStatus.textContent =
        "Settings saved.";


    saveSettings.textContent =
        "Saved ✓";


    setTimeout(() => {

        saveSettings.textContent =
            "Save Settings";


        saveStatus.textContent =
            "Changes are saved on this device.";

    }, 1800);

}


function applyReducedMotion(enabled) {

    document.body.classList.toggle(
        "reduced-motion",
        enabled
    );

}


reducedMotion.addEventListener(
    "change",
    () => {

        applyReducedMotion(
            reducedMotion.checked
        );

    }
);


saveSettings.addEventListener(
    "click",
    saveUserSettings
);


window.addEventListener(
    "load",
    loadSettings
);
