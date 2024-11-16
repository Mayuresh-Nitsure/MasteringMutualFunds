document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const signupBtn = document.getElementById("signup-btn");
    const loginBtn = document.getElementById("login-btn");

    // Show the main content after 3 seconds
    setTimeout(() => {
        splashScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");
    }, 3000);

    // Show the sign-up form
    signupBtn.addEventListener("click", () => {
        signupForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });

    // Show the login form
    loginBtn.addEventListener("click", () => {
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
    });
});
