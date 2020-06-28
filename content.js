

const waitingForHeader = setInterval(() => {
  const header = document.querySelector('._1QUKR');
  if (header) {
    var speed = 1.00;
    clearInterval(waitingForHeader)

    const speedContainer = document.createElement("div");
    speedContainer.classList.add("speedContainer");
    header.appendChild(speedContainer)

    const minusButton = document.createElement("button")
    minusButton.innerHTML = "-"
    minusButton.classList.add("speedButton")
    speedContainer.appendChild(minusButton)

    const speedDisplay = document.createElement("span");
    speedDisplay.innerHTML = speed.toFixed(2);
    speedDisplay.classList.add("speedDisplay");
    speedContainer.appendChild(speedDisplay)

    const plusButton = document.createElement("button")
    plusButton.innerHTML = "+"
    plusButton.classList.add("speedButton")
    speedContainer.appendChild(plusButton)

    minusButton.addEventListener("click", () => {
      decreaseSpeed()
    })

    plusButton.addEventListener("click", () => {
      increaseSpeed()
    })

    function decreaseSpeed() {
      speed = speed - 0.25;
      speedDisplay.innerHTML = speed.toFixed(2);
      updateSpeed(speed);
    }

    function increaseSpeed() {
      speed = speed + 0.25;
      speedDisplay.innerHTML = speed.toFixed(2);
      updateSpeed(speed);
    }

    function updateSpeed(speed) {
      let audios = document.querySelectorAll("audio");
      audios.forEach(audio => {
        audio.playbackRate = speed;
      })
    }

  }

}, 1000)





