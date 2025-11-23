const rangeSlider = document.getElementById("char-length");
const charNumberEL = document.querySelector(".length-number");
const strengthTextEl = document.getElementById("strength-text");
const strengthLevelEl = document.querySelectorAll(".level");
let charLength;

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperCaseLetters = () => {
  return letters.map((letter) => letter.toUpperCase())
};

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

const passwordStrength = [
  {word: "TOO WEAK!", value: 0},
  {word: "WEAK", value: 1},
  {word: "MEDIUM", value: 2},
  {word: "STRONG", value: 3}
];


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

function updatePasswordStrength () {
  strengthLevelEl.forEach((level) => {
    level.classList.remove("level-red", "level-orange", "level-green");
  })

  if (charLength <= 5) {
    strengthTextEl.textContent = passwordStrength[0].word;
    strengthLevelEl[passwordStrength[0].value].classList.add("level-red");
  } else if (charLength > 5 && charLength < 10) {
    strengthTextEl.textContent = passwordStrength[1].word;
    for (let i = 0; i < 2; i++) {
      strengthLevelEl[passwordStrength[i].value].classList.add("level-orange");
    }
  } 
}

rangeSlider.addEventListener("input", () => {
  charLength = Number(rangeSlider.value);
  updateCharNumber();
  updateSlider();
  updatePasswordStrength();
  
})

updateSlider();


