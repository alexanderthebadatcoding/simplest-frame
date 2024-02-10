// This is a template for grid-based work was created by @clayheaton.
// Please take, remix, fork, share, and create!

let debug = false;
let seed = 0; //seed Hash
let splitString, bgColor, darkColor, lightColor, from, to, m, s, shuff;
let colors = [
  "#825d97",
  "#2d3578",
  "#2754c3",
  "#4983c3",
  "#53af97",
  "#01717a",
  "#006e33",
  "#fde31a",
  "#fd7c39",
  "#c43220",
  "#ff55a5",
  "#f088a4",
  "#806a4e",
  "#8c5332",
];

// Only one of these will be used. See the next note below.
let sectorsWide = 8;
let sectorsTall = 8;

// Set when sectors are created, but included here for easy global reference
let calcSectorsWide;
let calcSectorsTall;

const X_AXIS = 1;
const Y_AXIS = 2;

// Fixed Axis - CHANGE THIS IF NEEDED
// If you "fix" the x-axis, then the numbers of sectorsWide set above
// will be used to calculate the dimensions of the sectors. If you 'fix'
// the y-axis, then number of sectorsTall will be used to calculate dimensions.
// The fixed side will remain what you set above, but the other axis will have
// a variable number of sectors, depending on how large the window is.
let fixed = Y_AXIS;

// Padding
// This adds padding to offset the grid in from the edges of the canvas
// This can be useful for avoiding unwanted mouse effects, since the mouse
// position in p5.js initializes at (0, 0);
let padding = 20;

let sectors = []; // 1-Dimensional: [Sector, Sector, Sector, etc. ]
let gridSectors = []; // 2-Dimensional: [[row of Sectors], [row of Sectors], etc. ]

function preload() {
  // splitString = unchar(split(fxhash, ""));
}

function setup() {
  colorMode(RGB);
  // createCanvas(600, 600);
  resizeCanvas(windowWidth, windowHeight);
  createGrid();
  rectMode(CENTER);
  noStroke();
  // noLoop();
  frameRate(1);
}

function draw() {
  seed = minute(); // FXHASH seed rand
  randomSeed(seed);
  // console.log(seed);
  from = color(colors[0]);
  to = color(colors[9]);
  bgColor = lerpColor(from, to, 0.33);
  background(bgColor);
  sectors.forEach((s) => s.display());
  m = minute();
  s = second();
  shuff = m + s;
  if (shuff === 0) {
    shuffle(colors, true);
  } else {
    shuffle(colors, false);
  }
}

function createGrid() {
  let allowedW = width - padding * 2;
  let allowedH = height - padding * 2;

  let sectorDim;

  if (fixed == X_AXIS) {
    sectorDim = allowedW / sectorsWide;
    calcSectorsWide = sectorsWide;
    calcSectorsTall = floor(allowedH / sectorDim);
  } else if (fixed == Y_AXIS) {
    sectorDim = allowedH / sectorsTall;
    calcSectorsTall = sectorsTall;
    calcSectorsWide = floor(allowedW / sectorDim);
  }

  // Calculate padding for centering the grid
  let paddingW = padding + (allowedW - sectorDim * calcSectorsWide) * 0.5;
  let paddingH = padding + (allowedH - sectorDim * calcSectorsTall) * 0.5;

  for (let row = 0; row < calcSectorsTall; row++) {
    let r = [];
    for (let col = 0; col < calcSectorsWide; col++) {
      let x = paddingW + col * sectorDim;
      let y = paddingH + row * sectorDim;
      let s = new Sector(row, col, x, y, sectorDim, sectorDim);
      r.push(s);
      sectors.push(s);
    }
    gridSectors.push(r);
  }
}

function windowResized() {
  randomSeed(seed);
  resizeCanvas(windowWidth, windowHeight);
  sectors = [];
  gridSectors = [];
  createGrid();
}
