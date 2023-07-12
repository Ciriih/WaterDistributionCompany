document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // these values are the actual email and password credentials
        const correctEmail = "admin@gmail.com";
        const correctPassword = "admin123";

        // Fetch the entered email and password from the form
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const enteredEmail = emailInput.value;
        const enteredPassword = passwordInput.value;

        // Check if the entered email and password match the correct credentials
        if (enteredEmail === correctEmail && enteredPassword === correctPassword) {
            // Redirect to the home page after a successful login
            window.location.href = "home/home.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
