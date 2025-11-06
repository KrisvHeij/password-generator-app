const rangeSlider = document.getElementById("char-length");
let charLength;


function updateSlider () {
  const val = Number(rangeSlider.value);
  const min = Number(rangeSlider.min);
  const max = Number(rangeSlider.max);
  const percent = ((val - min) / (max - min)) * 100;
  console.log(percent);
  rangeSlider.style.background = `linear-gradient(to right, #a3ffae ${percent}%, #191820 ${percent}%)`;
}

rangeSlider.addEventListener("input", () => {
  charLength = rangeSlider.value;
  updateSlider();
})

updateSlider();


