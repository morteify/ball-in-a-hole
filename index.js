import { CelestialBody } from "./CelestialBody.js";
import { Planet } from "./Planet.js";
import { Timer } from "./Timer.js";

let seconds = 0;
window.onload = () => Timer(seconds);

const body = document.querySelector("body");
body.style = "width:'100vw';height:'100vh';margin:0;padding:0";
const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const centerCoord = {
  width: window.innerWidth / 2,
  height: window.innerHeight / 2
};
const player = {
  x: Math.random() * centerCoord.width,
  y: Math.random() * centerCoord.width,
  radius: 25,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  anticlockwise: false
};

function init(ctx, player, centerCoord) {
  window.requestAnimationFrame(() => draw(ctx, player, centerCoord));
}

function draw(canvasContext, player, centerCoord) {
  const universe = new Image();
  universe.src = "/assets/universe.jpg";

  const moon = new Image();
  moon.src = "/assets/moon.png";

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

  // Spaceship
  const drawSpaceShip = () => {
    const spaceship = new Image();
    spaceship.src = "/assets/spaceship.png";
    ctx.drawImage(spaceship, player.x, player.y, 55, 30);
  };
  drawSpaceShip();
  const handleOrientation = event => {
    const absolute = event.absolute;
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
    player.x += beta * 0.0001;
    player.y -= gamma * 0.0001;
    if (
      player.x < centerCoord.width &&
      player.x >= centerCoord.width - 55 &&
      player.y < centerCoord.height &&
      player.y >= centerCoord.height - 55
    ) {
      alert(
        `You've reached the Sun in ${
          document.querySelector(".timer").innerText
        }`
      );
      player.x = 0;
      player.y = 0;
      window.location.reload();
    }
  };
  window.addEventListener("deviceorientation", handleOrientation, true);

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
    320,
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
  const Saturn = new CelestialBody(canvasContext, 370, 4, saturn);
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
    400,
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
    450,
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
  canvasContext.translate(0, 0);

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

  window.requestAnimationFrame(() => draw(canvasContext, player, centerCoord));
}

init(ctx, player, centerCoord);
