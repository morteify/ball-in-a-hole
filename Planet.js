import { CelestialBody } from "./CelestialBody.js";

export function Planet(canvasContext, planetName, params, ...moons) {
  const {
    arcRadius,
    moonRotatingSpeedMultiplier,
    imageSource,
    dx,
    dy,
    dWidth,
    dHeight
  } = params;
  const planetImage = new Image();
  planetImage.src = `/assets/${planetName}.png`;
  const planet = new CelestialBody(
    canvasContext,
    arcRadius,
    moonRotatingSpeedMultiplier,
    planetImage,
    ...moons
  );
  planet.drawOrbit();
  planet.drawObject(dx, dy, dWidth, dHeight);
  planet.drawMoons();
  canvasContext.restore();
  canvasContext.save();
}
