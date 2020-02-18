import { CelestialBody } from "./CelestialBody.js";

export function Planet(canvasContext, planetName, ...moons) {
  const planetImage = new Image();
  planetImage.src = `/assets/${planetName}.png`;
  canvasContext.translate(centerCoord.width, centerCoord.height);
  const planet = new CelestialBody(canvasContext, 67, 37, name, ...moons);
  planet.drawOrbit();
  planet.drawObject(-5, -5, 10, 10);
  planet.drawMoons();
  canvasContext.restore();
  canvasContext.save();
}
