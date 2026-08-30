const planButtons =
    document.querySelectorAll(".select-plan");

planButtons.forEach(button => {

    button.addEventListener("click", () => {

        const originalText =
            button.textContent;

        button.textContent =
            "Coming Soon";

        button.disabled = true;

        setTimeout(() => {

            button.textContent =
                originalText;

            button.disabled = false;

        }, 1800);

    });

});
