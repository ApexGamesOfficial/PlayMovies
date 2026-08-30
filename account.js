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
// SHOW / HIDE PASSWORD
// ========================================

const showPasswordButtons =
    document.querySelectorAll(".show-password");

showPasswordButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId =
            button.dataset.target;

        const input =
            document.getElementById(targetId);

        if (!input) return;

        const hidden =
            input.type === "password";

        input.type =
            hidden
                ? "text"
                : "password";

        button.textContent =
            hidden
                ? "Hide"
                : "Show";

    });

});


// ========================================
// CREATE ACCOUNT
// ========================================

const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();

            const message =
                document.getElementById(
                    "signupMessage"
                );

            const firstName =
                document.getElementById(
                    "firstName"
                ).value.trim();

            const lastName =
                document.getElementById(
                    "lastName"
                ).value.trim();

            const displayName =
                document.getElementById(
                    "displayName"
                ).value.trim();

            const email =
                document.getElementById(
                    "signupEmail"
                ).value.trim();

            const dateOfBirth =
                document.getElementById(
                    "dateOfBirth"
                ).value;

            const gender =
                document.getElementById(
                    "gender"
                ).value;

            const password =
                document.getElementById(
                    "signupPassword"
                ).value;

            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            // Password check

            if (
                password !==
                confirmPassword
            ) {

                showMessage(
                    message,
                    "Your passwords do not match.",
                    "error"
                );

                return;
            }


            showMessage(
                message,
                "Creating your PlayMovies account...",
                "success"
            );


            try {

                const {
                    data,
                    error
                } =
                    await supabaseClient
                        .auth
                        .signUp({

                            email: email,

                            password: password,

                            options: {

                                data: {

                                    first_name:
                                        firstName,

                                    last_name:
                                        lastName,

                                    display_name:
                                        displayName,

                                    date_of_birth:
                                        dateOfBirth,

                                    gender:
                                        gender || null

                                }

                            }

                        });


                if (error) {

                    showMessage(
                        message,
                        error.message,
                        "error"
                    );

                    return;
                }


                // If Supabase immediately creates
                // a logged-in session

                if (data.session) {

                    showMessage(
                        message,
                        "Account created! Loading your profiles...",
                        "success"
                    );

                    setTimeout(() => {

                        window.location.href =
                            "profiles.html";

                    }, 1200);

                }

                else {

                    // Email confirmation is enabled

                    showMessage(
                        message,
                        "Account created! Check your email to verify your PlayMovies account.",
                        "success"
                    );

                }

            }

            catch (error) {

                console.error(error);

                showMessage(
                    message,
                    "Something went wrong while creating your account.",
                    "error"
                );

            }

        }
    );

}


// ========================================
// LOG IN
// ========================================

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();

            const message =
                document.getElementById(
                    "loginMessage"
                );

            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();

            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            showMessage(
                message,
                "Logging you in...",
                "success"
            );


            try {

                const {
                    data,
                    error
                } =
                    await supabaseClient
                        .auth
                        .signInWithPassword({

                            email:
                                email,

                            password:
                                password

                        });


                if (error) {

                    showMessage(
                        message,
                        "Incorrect email or password.",
                        "error"
                    );

                    return;
                }


                if (data.user) {

                    showMessage(
                        message,
                        "Welcome back! Loading your profiles...",
                        "success"
                    );

                    setTimeout(() => {

                        window.location.href =
                            "profiles.html";

                    }, 900);

                }

            }

            catch (error) {

                console.error(error);

                showMessage(
                    message,
                    "Something went wrong while logging in.",
                    "error"
                );

            }

        }
    );

}


// ========================================
// MESSAGE HELPER
// ========================================

function showMessage(
    element,
    text,
    type
) {

    if (!element) return;

    element.textContent =
        text;

    element.className =
        `form-message show ${type}`;

}
