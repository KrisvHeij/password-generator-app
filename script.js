const rangeSlider = document.getElementById("char-length");
const charNumberEL = document.querySelector(".length-number");
let charLength;


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
})

updateSlider();


