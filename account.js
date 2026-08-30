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


const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const password =
                document.getElementById(
                    "signupPassword"
                ).value;

            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;

            const message =
                document.getElementById(
                    "signupMessage"
                );

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
                "Account page works! Real account creation will be connected later.",
                "success"
            );

        }
    );

}


const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const message =
                document.getElementById(
                    "loginMessage"
                );

            showMessage(
                message,
                "Login page works! Real account login will be connected later.",
                "success"
            );

        }
    );

}


function showMessage(
    element,
    text,
    type
) {

    element.textContent = text;

    element.className =
        `form-message show ${type}`;

}
