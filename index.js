import { CelestialBody } from "./CelestialBody.js";

const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const universe = new Image();
universe.src = "/assets/universe.jpg";

const sun = new Image();
sun.src = "/assets/sun.png";

var moon = new Image();
var earth = new Image();
function init() {
  moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
  earth.src = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";
  window.requestAnimationFrame(() => draw(ctx));
}
const playerBall = {
  x: 100,
  y: 75,
  radius: 25,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  anticlockwise: false
};

ctx.beginPath();
ctx.arc(...Object.values(playerBall));
ctx.stroke();

function drawBall(canvasContext, params) {
  canvasContext.beginPath();
  canvasContext.arc(...Object.values(params));
  canvasContext.stroke();
}

// const deltaX = 8;
// const deltaY = 8;

// document.addEventListener("keypress", event => {
//   console.log(event);
//   if (event.key === "d") {
//     ctx.clearRect(playerBall.x, playerBall.y, playerBall.x, playerBall.y);
//     playerBall.x += deltaX;
//     drawBall(ctx, playerBall);
//   }
//   if (event.key === "a") {
//     ctx.clearRect(playerBall.x, playerBall.y, playerBall.x, playerBall.y);
//     playerBall.x -= deltaX;
//     drawBall(ctx, playerBall);
//   }
//   if (event.key === "w") {
//     ctx.clearRect(playerBall.x, playerBall.y, playerBall.x, playerBall.y);
//     playerBall.y -= deltaY;
//     drawBall(ctx, playerBall);
//   }
//   if (event.key === "s") {
//     ctx.clearRect(playerBall.x, playerBall.y, playerBall.x, playerBall.y);
//     playerBall.y += deltaY;
//     drawBall(ctx, playerBall);
//   }
// });

const centerCoord = {
  width: window.innerWidth / 5,
  height: window.innerHeight / 5
};

function draw(canvasContext) {
  canvasContext.globalCompositeOperation = "destination-over";
  canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight); // clear canvas

  canvasContext.fillStyle = "rgba(0, 0, 0, 0.4)";
  canvasContext.strokeStyle = "rgba(0, 153, 255, 0.4)";
  canvasContext.save();
  canvasContext.translate(centerCoord.width, centerCoord.height);

  const Earth = new CelestialBody(
    canvasContext,
    150,
    20,
    earth,
    { moonImageSource: moon, moonRotatingSpeedMultiplier: 2 },
    { moonImageSource: moon, moonRotatingSpeedMultiplier: 10 }
  );
  Earth.drawOrbit();
  Earth.drawObject();
  Earth.drawMoons();

  canvasContext.restore();

  // Universe
  canvasContext.drawImage(
    universe,
    0,
    0,
    window.innerWidth,
    window.innerHeight
  );

  window.requestAnimationFrame(() => draw(ctx));
}

init();
