const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementsByClassName("sign-up-form")[0];
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

/**
 * 'mockDB' is a mock data base in the form of a map where the key is the email
 * and the value is a hashed password (for this example we will use the actual
 * password which is definitely not a good practice in the real world)
 */

const mockDB = new Map();
mockDB.set("test@test.com", "123456789"); // to test the log in functionality

form.addEventListener("submit", (e) => {
  var emailErrorMessage = "";
  var passwordErrorMessage = "";
  var error = false;

  if (!mockDB.has(email.value)) {
    emailErrorMessage =
      "This email address does not exist. Please sign up first.";
    error = true;
  }

  if (email.value === "" || email == null) {
    emailErrorMessage = "Please enter your email address";
    error = true;
  }

  if (mockDB.has(email.value)) {
    if (mockDB.get(email.value) != password.value) {
      passwordErrorMessage = "Password is wrong. Please try again.";
      error = true;
    }
  }

  if (error) {
    e.preventDefault();
    emailError.innerText = emailErrorMessage;
    passwordError.innerText = passwordErrorMessage;
  }
});
