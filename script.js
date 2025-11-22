const rangeSlider = document.getElementById("char-length");
const charNumberEL = document.querySelector(".length-number");
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

rangeSlider.addEventListener("input", () => {
  charLength = rangeSlider.value;
  updateCharNumber();
  updateSlider();
  console.log(upperCaseLetters());
})

updateSlider();


