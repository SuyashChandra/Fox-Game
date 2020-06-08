import gameState from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

async function init() {
  console.log("Starting Game");
  initButtons(gameState.handleUserAction);

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
