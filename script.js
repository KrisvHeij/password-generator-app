const passwordEl = document.getElementById("password");
const copyTextEL = document.getElementById("copy-text");
const copyBtn = document.getElementById("copy-btn");
const optionsContainer = document.querySelector(".options-container");
const rangeSlider = document.getElementById("char-length");
const charNumberEL = document.querySelector(".length-number");
const strengthTextEl = document.getElementById("strength-text");
const strengthLevelEl = document.querySelectorAll(".level");
const generateBtn = document.querySelector(".generate-btn");

const includeUpperCase = document.getElementById("uppercase");
const includeLowerCase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const allOptions = [includeUpperCase, includeLowerCase, includeNumbers, includeSymbols];
let charLength = Number(rangeSlider.value);

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = lowerCaseLetters.toUpperCase();
const numbers = "1234567890";
const symbols = "!@#$%^&*()";
const passwordStrength = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

function updateSlider () {
  const val = Number(rangeSlider.value);
  const max = Number(rangeSlider.max);
  const percent = (val / max) * 100;

  rangeSlider.style.background = `linear-gradient(to right, #a3ffae ${percent}%, #191820 ${percent}%)`;
}

function updateCharNumber () {
  charNumberEL.textContent = charLength;
}

// Strength level based only on character length & options
function updatePasswordStrength (chars) {
  let totalOptions = 0;
  // Remove all color classes
  strengthLevelEl.forEach((level) => {
    level.classList.remove("level-red", "level-orange", "level-yellow", "level-green");
  })

  // Check how many options are checked
  allOptions.forEach((option) => {
    if (option.checked) {
      totalOptions += 1;
    }
  })
  
  // Show strength levels
  function showStrength (textIndex, color, count) {
    strengthTextEl.textContent = passwordStrength[textIndex];
    for (let i = 0; i < count; i++) {
      strengthLevelEl[i].classList.add(color);
    }
  }

  if (chars > 14 && totalOptions >=3) {
    showStrength(3, "level-green", 4);
  } else if (chars > 9 && totalOptions >= 3) {
    showStrength(2, "level-yellow", 3);
  } else if (chars > 5 && totalOptions >= 2) {
    showStrength(1, "level-orange", 2);
  } else {
    showStrength(0, "level-red", 1);
  } 
}

// Generate & show password
function generatePassword (length) {
  
  let totalChars = "";
  let password = "";
  
  if (includeUpperCase.checked) {
    totalChars += upperCaseLetters;
  } 
  if (includeLowerCase.checked) {
    totalChars += lowerCaseLetters;
  }
  if (includeNumbers.checked) {
    totalChars += numbers;
  }
  if (includeSymbols.checked) {
    totalChars += symbols;
  } 

  if (totalChars.length === 0) {
    passwordEl.textContent = "No option selected";
    passwordEl.style.color = "red";
    return;
  }

  const randomChars = new Uint8Array(length);

  crypto.getRandomValues(randomChars);

  randomChars.forEach((char) => {
    const index = char % totalChars.length;
    password += totalChars[index];
  })

  passwordEl.textContent = password;
  passwordEl.style.color = "var(--c-grey-200)";
  
}

// Copy password to clipboard
function copyPassword () {
  const password = passwordEl.textContent || passwordEl.value;

  navigator.clipboard.writeText(password)
    .then(() => {
      copyTextEL.classList.remove("visually-hidden");
    })
    .catch(() => {
      console.error("Failed to copy");
    })
}

function reset () {
  copyTextEL.classList.add("visually-hidden");
}

// EventListeners
rangeSlider.addEventListener("input", () => {
  charLength = Number(rangeSlider.value);
  updateCharNumber();
  updateSlider();
})

generateBtn.addEventListener("click", () => {
  reset();
  generatePassword(charLength);
  updatePasswordStrength(charLength);
})

copyBtn.addEventListener("click", () => {
  copyPassword();
});

optionsContainer.addEventListener("change", () => {
  reset();
})

updateCharNumber();
updateSlider();