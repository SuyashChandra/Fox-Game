const TICK_RATE = 3000;

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("Starting Game");

  let nextTimeToTick = Date.now();

  function nextAnimationFram() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFram);
  }

  requestAnimationFrame(nextAnimationFram);
}

init();
