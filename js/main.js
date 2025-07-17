// main.js
console.log("Dellalicious site loaded.");

window.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded fired!");
  adjustCurtain();
});

window.addEventListener('resize', adjustCurtain);

function adjustCurtain() {
  console.log("Running adjustCurtain...");

  const leftCurtain = document.querySelector('.curtain-side:first-child');
  const rightCurtain = document.querySelector('.curtain-side:last-child');
  const curtainCenter = document.querySelector('.curtain-center');
  const headerBar = document.querySelector('.header-bar');

  if (!leftCurtain || !rightCurtain || !curtainCenter || !headerBar) {
    console.log("Curtain or header-bar elements not found — check selectors!");
    return;
  }

  const totalWidth = window.innerWidth;
  const leftWidth = leftCurtain.offsetWidth;
  const rightWidth = rightCurtain.offsetWidth;
  const centerWidth = totalWidth - leftWidth - rightWidth;

  const tileOriginalWidth = 300;

  // Determine how many tiles would approximately fit, rounded to nearest integer:
  const numTiles = Math.max(1, Math.round(centerWidth / tileOriginalWidth));

  // Adjust width so these tiles fit exactly:
  const adjustedTileWidth = centerWidth / numTiles;

  console.log(`Total width: ${totalWidth}`);
  console.log(`Center width: ${centerWidth}`);
  console.log(`Num tiles: ${numTiles}`);
  console.log(`Adjusted tile width: ${adjustedTileWidth}`);

  curtainCenter.style.backgroundSize = `${adjustedTileWidth}px 100%`;

  // Adjust header-bar width to be slightly wider than curtainCenter
  let extraPadding = 160; // pixels wider than curtainCenter
  if(centerWidth < 650) {extraPadding = extraPadding * 0.6}
  const barWidth = Math.max(centerWidth + extraPadding);

  headerBar.style.width = `${barWidth}px`;

  console.log(`Header-bar width set to ${barWidth}px`);
}
