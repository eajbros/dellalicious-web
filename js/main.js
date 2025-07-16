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

  if (!leftCurtain || !rightCurtain || !curtainCenter) {
    console.log("Curtain elements not found — check selectors!");
    return;
  }

  const totalWidth = window.innerWidth;
  const leftWidth = leftCurtain.offsetWidth;
  const rightWidth = rightCurtain.offsetWidth;
  const centerWidth = totalWidth - leftWidth - rightWidth;

  const tileOriginalWidth = 200;

  // Determine how many tiles would approximately fit, rounded to nearest integer:
  const numTiles = Math.max(1, Math.round(centerWidth / tileOriginalWidth));

  // Adjust width so these tiles fit exactly:
  const adjustedTileWidth = centerWidth / numTiles;

  console.log(`Total width: ${totalWidth}`);
  console.log(`Center width: ${centerWidth}`);
  console.log(`Num tiles: ${numTiles}`);
  console.log(`Adjusted tile width: ${adjustedTileWidth}`);

  curtainCenter.style.backgroundSize = `${adjustedTileWidth}px 100%`;
}
