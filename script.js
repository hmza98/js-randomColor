/*
For random color generation
using hsl --> hue (0-360) , saturation (0-100) , lightness (0-100)
after generating 3 random values using them as a hsl value
*/

const generateRandomNumber = (maxvalue) => Math.floor(Math.random() * maxvalue);

const setColor = () => {
  const hue = generateRandomNumber(360);
  const saturation = generateRandomNumber(100);
  const lightness = generateRandomNumber(100);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const generateRandomColor = () => {
  const hslValue = setColor();
  const play = document.getElementById("playArea");
  play.style.backgroundColor = hslValue;
};
