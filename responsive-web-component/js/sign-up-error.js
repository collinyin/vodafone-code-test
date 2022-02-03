const password = document.getElementById("password");
const passwordStrength = document.getElementById("password-strength");
const strength = document.getElementById("strength");
var strengthCounter = 0;
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var specialFlag = false;
var upperFlag = false;
var numFlag = false;

/**
 * PASSWORD STRENGTH DETECTOR
 * - A strong password contains:
 *    - at least 1 capital letter
 *    - at least 1 number
 *    - at least 1 upper case letter
 * - A moderate password contains 2 of the 3 above and a weak password only contains 1 above.
 * - The length of the password also determines it's strength, if the password has 4 or less
 *    characters, it is considered a weak password even if it satisfies all 3 of the conditions above.
 * - A moderate password contains between 5-8 characters and a strong password contains 9+ characters.
 */

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    passwordStrength.style.display = "block";
  } else {
    passwordStrength.style.display = "none";
  }

  /**
   * Tests whether there exists a special char, upper case letter or number; if any exist in the password
   *    it will increment the counter. However if it gets deleted, the counter will decrement.
   *
   * Note: Special char can only increment the counter by at most 1, this means that if there are 5
   *        special characters the counter is only incremented by 1. Likewise for upper case letters
   *        and numbers.
   */

  if (specialChars.test(password.value) && !specialFlag) {
    specialFlag = true;
    strengthCounter++;
  } else if (!specialChars.test(password.value) && specialFlag) {
    specialFlag = false;
    strengthCounter--;
  }

  if (/[A-Z]/.test(password.value) && !upperFlag) {
    upperFlag = true;
    strengthCounter++;
  } else if (!/[A-Z]/.test(password.value) && upperFlag) {
    upperFlag = false;
    strengthCounter--;
  }

  if (/\d/.test(password.value) && !numFlag) {
    numFlag = true;
    strengthCounter++;
  } else if (!/\d/.test(password.value) && numFlag) {
    numFlag = false;
    strengthCounter--;
  }
  console.log(strengthCounter);
  console.log(password.value);

  /**
   * Checks the strength of the password by length and the number of conditions passed
   */
  if (password.value.length <= 4 || strengthCounter <= 1) {
    strength.innerHTML = "Weak";
    strength.style.color = "red";
  }

  if (password.value.length >= 5 && strengthCounter >= 1) {
    strength.innerHTML = "Moderate";
    strength.style.color = "orange";
  }

  if (password.value.length >= 8 && strengthCounter >= 3) {
    strength.innerHTML = "Strong";
    strength.style.color = "green";
  }
});

/**
 * Error handling of the sign up form
 */
const form = document.getElementsByClassName("sign-up-form")[0];
const errorElement = document.getElementsByClassName("error");
const errorHead = errorElement[0];
const errorBody = errorElement[1];
const email = document.getElementById("email");
const retypedPassword = document.getElementById("retyped-password");
const fullname = document.getElementById("fullname");
const selectionBox = document.getElementsByClassName("select")[0];
const checkBox = document.getElementsByClassName("checkbox")[0];
const button = document.getElementsByClassName("sign-up-button")[0];
/**
 * There will be many more if statements in the real world but for 
    demonstration purposes I've only provided a few basic ones below.
 */
form.addEventListener("submit", (e) => {
  let messages = [];
  if (email.value === "" || email == null) {
    messages.push("• An email is required");
  }

  if (password.value.length <= 7) {
    messages.push("• Password must be 8 or more characters");
  }

  if (retypedPassword.value != password.value) {
    messages.push("• Passwords do not match");
  }

  if (fullname.value === "" || fullname.value == null) {
    messages.push("• A name is required");
  } else if (!fullname.value.match(" ")) {
    messages.push("• Your full name is required");
  }

  if (selectionBox.value === "Select your age range") {
    messages.push("• Your age range is required");
  }

  if (!checkBox.checked) {
    messages.push("• Please agree to the terms and conditions");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorHead.innerText = "Please fix the following:";
    errorBody.innerText = messages.join("\n");
  }
});
