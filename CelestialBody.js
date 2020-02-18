export class CelestialBody {
  constructor(
    canvasContext,
    arcRadius,
    rotatingSpeedMultiplier,
    mainCelestialBodyImageSource,
    ...moons
  ) {
    this.canvasContext = canvasContext;
    this.arcRadius = arcRadius;
    this.rotatingSpeedMultiplier = rotatingSpeedMultiplier;
    this.mainObjectImageSource = mainCelestialBodyImageSource;
    this.moons = moons;
  }

  drawOrbit() {
    this.canvasContext.beginPath();
    const arcX = 0;
    const arcY = 0;
    const arcRadius = this.arcRadius;
    const arcStartAngle = 0;
    const arcEndAngle = Math.PI * 2;
    this.canvasContext.arc(arcX, arcY, arcRadius, arcStartAngle, arcEndAngle);
    this.canvasContext.stroke();
  }

  drawObject() {
    const time = new Date();
    this.canvasContext.rotate(
      ((this.rotatingSpeedMultiplier * Math.PI) / 60) * time.getSeconds() +
        ((this.rotatingSpeedMultiplier * Math.PI) / 60000) *
          time.getMilliseconds()
    );
    const translateX = this.arcRadius;
    const translateY = 0;
    this.canvasContext.translate(translateX, translateY);
    this.canvasContext.drawImage(this.mainObjectImageSource, -12, -12);
  }

  drawMoons() {
    const drawMoon = ({ moonImageSource, moonRotatingSpeedMultiplier }) => {
      const time = new Date();

      this.canvasContext.save();
      this.canvasContext.rotate(
        ((moonRotatingSpeedMultiplier * Math.PI) / 6) * time.getSeconds() +
          ((moonRotatingSpeedMultiplier * Math.PI) / 6000) *
            time.getMilliseconds()
      );
      this.canvasContext.translate(0, 28.5);
      this.canvasContext.drawImage(moonImageSource, -3.5, -3.5);
      this.canvasContext.restore();
    };
    this.moons.forEach(moon => {
      drawMoon(moon);
    });
  }
}
