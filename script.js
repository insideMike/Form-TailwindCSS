document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordRepeat = document.getElementById("password-repeat").value;

    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    if (username.length < 3) {
      usernameError.textContent = "Username must have at least 3 characters.";
      return;
    } else {
      usernameError.textContent = "";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError.textContent = "Enter a valid email address.";
      return;
    } else {
      emailError.textContent = "";
    }

    if (password.length < 6) {
      passwordError.textContent =
        "The password must be at least 6 characters long.";
      return;
    } else {
      passwordError.textContent = "";
    }

    if (password !== passwordRepeat) {
      passwordError.textContent = "Passwords are not the same.";
      return;
    } else {
      passwordError.textContent = "";
    }
  });
});
