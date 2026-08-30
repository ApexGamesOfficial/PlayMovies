// ========================================
// PLAYMOVIES PROFILE
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
// ELEMENTS
// ========================================

const profileAvatar =
    document.getElementById("profileAvatar");

const profileDisplayName =
    document.getElementById("profileDisplayName");

const profileEmail =
    document.getElementById("profileEmail");

const accountFullName =
    document.getElementById("accountFullName");

const accountEmail =
    document.getElementById("accountEmail");

const accountDisplayName =
    document.getElementById("accountDisplayName");

const currentPlan =
    document.getElementById("currentPlan");

const switchProfileButton =
    document.getElementById("switchProfileButton");

const manageProfilesButton =
    document.getElementById("manageProfilesButton");

const purchaseHistoryButton =
    document.getElementById("purchaseHistoryButton");

const signOutButton =
    document.getElementById("signOutButton");


// ========================================
// LOAD ACCOUNT
// ========================================

async function loadProfile() {

    try {

        const {
            data: { user },
            error
        } =
            await supabaseClient.auth.getUser();


        if (error || !user) {

            window.location.href =
                "login.html";

            return;
        }


        const metadata =
            user.user_metadata || {};


        const firstName =
            metadata.first_name || "";

        const lastName =
            metadata.last_name || "";

        const fullName =
            `${firstName} ${lastName}`.trim();


        const displayName =
            localStorage.getItem(
                "playmoviesActiveProfile"
            ) ||
            metadata.display_name ||
            firstName ||
            "Profile";


        // Avatar

        profileAvatar.textContent =
            displayName
                .charAt(0)
                .toUpperCase();


        // Main identity

        profileDisplayName.textContent =
            displayName;

        profileEmail.textContent =
            user.email || "";


        // Account information

        accountFullName.textContent =
            fullName || "Not set";

        accountEmail.textContent =
            user.email || "Not set";

        accountDisplayName.textContent =
            metadata.display_name ||
            displayName;


        /*
            For now every account is Free.

            Later this will come from the
            real PlayMovies subscription
            database.
        */

        currentPlan.textContent =
            "Free";

    }

    catch (error) {

        console.error(
            "Could not load PlayMovies profile:",
            error
        );

        window.location.href =
            "login.html";

    }

}


// ========================================
// SWITCH PROFILE
// ========================================

switchProfileButton.addEventListener(
    "click",
    () => {

        window.location.href =
            "profiles.html";

    }
);


// ========================================
// MANAGE PROFILES
// ========================================

manageProfilesButton.addEventListener(
    "click",
    () => {

        window.location.href =
            "profiles.html";

    }
);


// ========================================
// PURCHASE HISTORY
// ========================================

purchaseHistoryButton.addEventListener(
    "click",
    () => {

        alert(
            "Purchase History will become available when PlayMovies purchases are connected."
        );

    }
);


// ========================================
// SIGN OUT
// ========================================

signOutButton.addEventListener(
    "click",
    async () => {

        signOutButton.disabled = true;

        signOutButton.textContent =
            "Signing Out...";


        const { error } =
            await supabaseClient.auth.signOut();


        if (error) {

            console.error(error);

            signOutButton.disabled = false;

            signOutButton.textContent =
                "Sign Out";

            alert(
                "PlayMovies couldn't sign you out. Please try again."
            );

            return;
        }


        localStorage.removeItem(
            "playmoviesActiveProfile"
        );

        localStorage.removeItem(
            "playmoviesAccountName"
        );

        localStorage.removeItem(
            "playmoviesAccountEmail"
        );


        window.location.href =
            "welcome.html";

    }
);


// ========================================
// START
// ========================================

window.addEventListener(
    "load",
    loadProfile
);
