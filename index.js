import { CelestialBody } from "./CelestialBody.js";

const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const universe = new Image();
universe.src = "/assets/universe.jpg";

var moon = new Image();
function init() {
  moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
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
  width: 780,
  height: 520
};

function draw(canvasContext) {
  canvasContext.globalCompositeOperation = "destination-over";
  canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight); // clear canvas

  canvasContext.fillStyle = "rgba(0, 0, 0, 0.4)";
  canvasContext.strokeStyle = "rgba(0, 153, 255, 0.4)";
  canvasContext.save();

  // Sun
  const sun = new Image();
  sun.src = "/assets/sun.png";
  canvasContext.translate(centerCoord.width, centerCoord.height);
  const Sun = new CelestialBody(canvasContext, 0, 2, sun);
  Sun.drawObject(-35, -35, 75, 75);
  canvasContext.restore();
  canvasContext.save();

  // Mercury
  const mercury = new Image();
  mercury.src = "/assets/mercury.png";
  canvasContext.translate(centerCoord.width, centerCoord.height);
  const Mercury = new CelestialBody(canvasContext, 67, 37, mercury);
  Mercury.drawOrbit();
  Mercury.drawObject(-5, -5, 10, 10);
  Mercury.drawMoons();
  canvasContext.restore();
  canvasContext.save();

  // Venus
  const venus = new Image();
  venus.src = "/assets/venus.png";
  canvasContext.translate(centerCoord.width, centerCoord.height);
  const Venus = new CelestialBody(canvasContext, 118, 25, venus);
  Venus.drawOrbit();
  Venus.drawObject(-13, -13, 27, 27);
  Venus.drawMoons();
  canvasContext.restore();
  canvasContext.save();

  // Earth
  const earth = new Image();
  earth.src = "/assets/earth.png";
  canvasContext.translate(centerCoord.width, centerCoord.height);
  const Earth = new CelestialBody(canvasContext, 159, 19, earth, {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 2,
    translateY: 25
  });
  Earth.drawOrbit();
  Earth.drawObject(-17, -17, 30, 30);
  Earth.drawMoons();
  canvasContext.restore();
  canvasContext.save();

  // Mars
  const mars = new Image();
  mars.src = "/assets/mars.png";
  const deimos = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 5,
    translateY: 19
  };
  const phobos = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 10,
    translateY: 20
  };
  canvasContext.translate(centerCoord.width, centerCoord.height);
  const Mars = new CelestialBody(canvasContext, 238, 14, mars, deimos, phobos);
  Mars.drawOrbit();
  Mars.drawObject(-7, -7, 15, 15);
  Mars.drawMoons();
  canvasContext.restore();
  canvasContext.save();

  // Jupiter
  const jupiter = new Image();
  jupiter.src = "/assets/jupiter.png";
  const io = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 10,
    translateY: 38
  };
  const europa = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 3,
    translateY: 49
  };
  const ganymede = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 2,
    translateY: 40
  };
  canvasContext.translate(centerCoord.width, centerCoord.height);
  const Jupiter = new CelestialBody(
    canvasContext,
    480,
    3,
    jupiter,
    io,
    europa,
    ganymede
  );
  Jupiter.drawOrbit();
  Jupiter.drawObject(-34, -34, 68, 68);
  Jupiter.drawMoons();
  canvasContext.restore();
  canvasContext.save();

  // Saturn
  const saturn = new Image();
  saturn.src = "/assets/saturn.png";
  canvasContext.translate(centerCoord.width, centerCoord.height);
  const Saturn = new CelestialBody(canvasContext, 637, 3, saturn);
  Saturn.drawOrbit();
  Saturn.drawObject(-30, -20, 60, 40);
  Saturn.drawMoons();
  canvasContext.restore();
  canvasContext.save();

  // Uranus
  const ariel = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 6,
    translateY: 30
  };
  const oberon = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 2,
    translateY: 45
  };
  const titania = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 10,
    translateY: 25
  };
  const umbriel = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 11,
    translateY: 29
  };
  const uranus = new Image();
  uranus.src = "/assets/uranus.png";
  canvasContext.translate(centerCoord.width, centerCoord.height);
  const Uranus = new CelestialBody(
    canvasContext,
    700,
    2,
    uranus,
    ariel,
    oberon,
    titania,
    umbriel
  );
  Uranus.drawOrbit();
  Uranus.drawObject(-20, -20, 40, 40);
  Uranus.drawMoons();
  canvasContext.restore();
  canvasContext.save();

  // Neptune
  const triton = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 2,
    translateY: 31
  };
  const proteus = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 7,
    translateY: 31
  };
  const larissa = {
    moonImageSource: moon,
    moonRotatingSpeedMultiplier: 10,
    translateY: 29
  };
  const neptune = new Image();
  neptune.src = "/assets/neptune.png";
  canvasContext.translate(centerCoord.width, centerCoord.height);
  const Neptune = new CelestialBody(
    canvasContext,
    770,
    1,
    neptune,
    triton,
    proteus,
    larissa
  );
  Neptune.drawOrbit();
  Neptune.drawObject(-18, -18, 37, 37);
  Neptune.drawMoons();
  canvasContext.restore();
  canvasContext.save();

  // Universe
  canvasContext.fillStyle = "rgba(0, 0, 0, 0.65)";
  canvasContext.fillRect(0, 0, window.innerWidth, window.innerHeight);
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
