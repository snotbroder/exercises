const windowArea = document.querySelector("main");
const heading = document.querySelector(".txt");

windowArea.addEventListener("mousemove", (event) => {
  // Get the width of the window
  const windowWidth = window.innerWidth;

  // Get the x position of the mouse
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calculate the hue based on the x position as a proportion of the window width (0-360 degrees)
  const light = (mouseX / windowWidth) * 100;
  const saturation = (mouseY / windowWidth) * 100;

  // Update the CSS custom property --bg-color
  document.documentElement.style.setProperty("--bg-color", `hsl(100, ${saturation}%, ${light}%)`);
  // document.documentElement.style.setProperty("--txt-color", `hsl(100, ${saturation}%, 100%)`);
});
