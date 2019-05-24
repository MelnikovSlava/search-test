const goToFocusElemByStep = function (step) {
  if (isNaN(step) || step === 0) {
    step = 1;
  }

  const index = document.activeElement.getAttribute('tabindex');
  document.querySelectorAll(`[tabindex="${+index + step}"]`)[0].focus();
};

export { goToFocusElemByStep };
