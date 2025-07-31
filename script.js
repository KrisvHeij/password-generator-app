const slider = document.getElementById("char-length");
const valueDisplay = document.querySelector(".length-number");

function updateSliderStyle() {
  const value = parseInt(slider.value);
  const max = parseInt(slider.max);
  const percent = (value / max) * 100;

  // HSL kleur (0 = rood, 120 = groen)
  const hue = (value / max) * 120;

  // Update de track achtergrond met een gekleurde "progress"
  slider.style.background = `linear-gradient(to right, hsl(127 100% 82%) ${percent}%, hsl(248 15% 11%) ${percent}%)`;

  // Optioneel: toon waarde en kleur deze ook
  valueDisplay.textContent = value;
  
}

slider.addEventListener("input", updateSliderStyle);
updateSliderStyle(); // bij eerste laden ook uitvoeren