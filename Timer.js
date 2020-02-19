export function Timer(seconds) {
  const timer = document.createElement("p");
  timer.classList.add("timer");
  const body = document.querySelector("body");
  body.appendChild(timer);
  timer.style.position = "absolute";
  timer.style.top = "10px";
  timer.style.right = "50px";
  timer.style.zIndex = "2";
  timer.style.color = "white";
  timer.style.fontWeight = "bold";
  timer.style.fontSize = "2rem";

  setInterval(() => {
    seconds += 1;
    timer.innerText = seconds;
    if (seconds > 60) {
      timer.innerText = `${Math.floor(seconds / 60)} min ${(seconds % 60)
        .toString()
        .padStart(2, "0")} s`;
    } else {
      timer.innerText = `${seconds} s`;
    }
  }, 1000);
}
