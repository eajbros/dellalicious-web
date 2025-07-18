// main.js
console.log("Dellalicious site loaded.");

window.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded fired!");
  adjustLayout();
});

window.addEventListener('resize', adjustLayout);

function adjustLayout() {
  console.log("Running adjustLayout...");
  adjustCurtainTiles();
  adjustHeaderBarWidth();
  syncHeaderBarHeight();
  adjustHeaderTextSize();
}

function adjustCurtainTiles() {
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

  const tileOriginalWidth = 300;
  const numTiles = Math.max(1, Math.round(centerWidth / tileOriginalWidth));
  const adjustedTileWidth = centerWidth / numTiles;

  curtainCenter.style.backgroundSize = `${adjustedTileWidth}px 100%`;

  console.log(`Curtain tiles adjusted: centerWidth=${centerWidth}, numTiles=${numTiles}, tileWidth=${adjustedTileWidth}`);
}

function adjustHeaderBarWidth() {
  const leftCurtain = document.querySelector('.curtain-side:first-child');
  const rightCurtain = document.querySelector('.curtain-side:last-child');
  const headerBar = document.querySelector('.header-bar');

  if (!leftCurtain || !rightCurtain || !headerBar) {
    console.log("Header-bar or curtain elements not found — check selectors!");
    return;
  }

  const totalWidth = window.innerWidth;
  const leftWidth = leftCurtain.offsetWidth;
  const rightWidth = rightCurtain.offsetWidth;
  const centerWidth = totalWidth - leftWidth - rightWidth;

  let extraPadding = 120;
  if (centerWidth < 650) {
    extraPadding = extraPadding * 0.5;
  }

  const barWidth = Math.max(centerWidth + extraPadding, 300);
  headerBar.style.width = `${barWidth}px`;

  console.log(`Header-bar width adjusted: barWidth=${barWidth}`);
}

function syncHeaderBarHeight() {
  const header = document.querySelector('header');
  const headerBar = document.querySelector('.header-bar');

  if (!header || !headerBar) {
    console.log("Header or header-bar not found — check selectors!");
    return;
  }

  const headerHeight = header.offsetHeight;
  headerBar.style.height = `${headerHeight * 0.25}px`;  //Bar is always a quarter of header height
  console.log(`Header-bar height adjusted: ${headerHeight * 0.5}px`);
}

function adjustHeaderTextSize() {
  const headerBar = document.querySelector('.header-bar');
  const logoCircle = document.querySelector('.logo-circle');
  const links = headerBar.querySelectorAll('a');

  if (!headerBar || !logoCircle || links.length === 0) {
    console.log("Header-bar text elements not found — check selectors!");
    return;
  }

  const barHeight = headerBar.offsetHeight;

  // Set font sizes based on header-bar height
  const logoFontSize = barHeight * 0.5;  // 50% of header-bar height for logo text
  const linkFontSize = barHeight * 0.4;  // 40% for links

  logoCircle.style.fontSize = `${logoFontSize}px`;

  links.forEach(link => {
    link.style.fontSize = `${linkFontSize}px`;
  });

  console.log(`Header text resized: logoFontSize=${logoFontSize}px, linkFontSize=${linkFontSize}px`);
}