/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const msg = document.querySelector(".message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userEmail = document.querySelector("#email");
        const actEmail = userEmail.value;

        if (actEmail) {
            msg.textContent = "Thank you! Your email address " + actEmail + " has been added to our mailing list!";
        } else {
            msg.textContent = "Please enter a valid email address.";
        }

        userEmail.value = "";
    });
});

