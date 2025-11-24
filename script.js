const rangeSlider = document.getElementById("char-length");
const charNumberEL = document.querySelector(".length-number");
const strengthTextEl = document.getElementById("strength-text");
const strengthLevelEl = document.querySelectorAll(".level");
const btn = document.querySelector(".generate-btn");

const includeUpperCase = document.getElementById("uppercase");
const includeLowerCase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");

let charLength;
let pw = [];

const lowerCaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseLetters = () => {
  return lowerCaseletters.map((letter) => letter.toUpperCase())
};
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const passwordStrength = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

function generateRandom (arr) {
  return Math.floor(Math.random() * arr.length);
}

function updateSlider () {
  const val = Number(rangeSlider.value);
  // const min = Number(rangeSlider.min);
  const max = Number(rangeSlider.max);
  const percent = (val / max) * 100;
  // const percent = ((val - min) / (max - min)) * 100;
  // console.log(percent);
  rangeSlider.style.background = `linear-gradient(to right, #a3ffae ${percent}%, #191820 ${percent}%)`;
}

function updateCharNumber () {
  charNumberEL.textContent = charLength;
}

// Strength level based only on character length
// function updatePasswordStrength () {
//   strengthLevelEl.forEach((level) => {
//     level.classList.remove("level-red", "level-orange", "level-yellow", "level-green");
//   })

//   if (charLength <= 5) {
//     strengthTextEl.textContent = passwordStrength[0];
//     strengthLevelEl[0].classList.add("level-red");
//   } else if (charLength > 5 && charLength <= 9) {
//     strengthTextEl.textContent = passwordStrength[1];
//     for (let i = 0; i < 2; i++) {
//       strengthLevelEl[i].classList.add("level-orange");
//     }
//   } else if (charLength > 9 && charLength <= 14) {
//     strengthTextEl.textContent = passwordStrength[2];
//     for (let i = 0; i < 3; i++) {
//       strengthLevelEl[i].classList.add("level-yellow");
//     }
//   } else if (charLength > 14 && charLength <=20) {
//     strengthTextEl.textContent = passwordStrength[3];
//     for (let i = 0; i < 4; i++) {
//       strengthLevelEl[i].classList.add("level-green");
//     }
//   }
// }

rangeSlider.addEventListener("input", () => {
  charLength = Number(rangeSlider.value);
  updateCharNumber();
  updateSlider();
  // updatePasswordStrength();

  // pw += symbols[generateRandom(symbols)];
  // console.log(pw);
  // console.log(upperCase);

})

btn.addEventListener("click", () => {
  let totalChars = [];
  let passwordChars = [];
  if (includeUpperCase.checked) {
    totalChars = totalChars.concat(upperCaseLetters());
  } 
  if (includeLowerCase.checked) {
    totalChars = totalChars.concat(lowerCaseletters);
  }
  if (includeNumbers.checked) {
    totalChars = totalChars.concat(numbers);
  }
  if (includeSymbols.checked) {
    totalChars = totalChars.concat(symbols);
  }

  for (let i = 0; i < charLength; i++) {
    passwordChars += totalChars[generateRandom(totalChars)]
  }

  console.log(totalChars);
  console.log(passwordChars);
})

updateSlider();


