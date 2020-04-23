// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(5, 4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
