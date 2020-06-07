import gameState from "./gameState";

const TICK_RATE = 3000;

async function init() {
  console.log("Starting Game");

  let nextTimeToTick = Date.now();

  function nextAnimationFram() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFram);
  }

  requestAnimationFrame(nextAnimationFram);
}

init();
