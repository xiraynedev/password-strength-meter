import updateStrengthMeter from './functions/updateStrengthMeter.js';

// Get DOM references

const passwordInput = document.getElementById('password-input');
// Event Listeners

passwordInput.addEventListener('input', () => {
  updateStrengthMeter(passwordInput.value);
});
