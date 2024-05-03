const colorCheck = () => {
  const text = document.querySelector('body');
  const background = getComputedStyle(document.body).getPropertyValue('background-color');

  const textRgb = window.getComputedStyle(text).getPropertyValue('color');
  const backgroundRgb = background.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  const red = parseInt(backgroundRgb[1], 10);
  const green = parseInt(backgroundRgb[2], 10);
  const blue = parseInt(backgroundRgb[3], 10);

  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  if (brightness > 125) {
    text.style.color = 'black';
  }
};

window.addEventListener('load', colorCheck);
window.addEventListener('resize', colorCheck);

