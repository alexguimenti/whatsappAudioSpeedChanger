const waitingForHeader = setInterval(() => {
  const header = document.querySelector('._1QUKR');
  if (header) {
    let speed = 1.00;
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
      console.log("minus");
      speed -= 0.25;
      speedDisplay.innerHTML = speed.toFixed(2);
      let audios = document.querySelectorAll("audio");
      audios.forEach(audio => {
        audio.playbackRate = speed;
      })
    })

    plusButton.addEventListener("click", () => {
      console.log("plus")
      speed += 0.25;
      speedDisplay.innerHTML = speed.toFixed(2);
      let audios = document.querySelectorAll("audio");
      audios.forEach(audio => {
        audio.playbackRate = speed;
      })
    })

    // button.addEventListener("click", () => {
    //   const audios = document.querySelectorAll("audio");
    //   audios.forEach(audio => {
    //     audio.playbackRate = 2;
    //   })
    // })

  }
}, 1000)




