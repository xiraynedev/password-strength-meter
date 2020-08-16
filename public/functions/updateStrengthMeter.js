import calculatePasswordStrength from './calculatePasswordStrength.js';

const strengthMeter = document.getElementById('strength-meter');
const reasonsContainer = document.getElementById('reasons');

function updateStrengthMeter(password) {
  let strength = 100;
  reasonsContainer.textContent = '';
  const weaknesses = calculatePasswordStrength(password);
  weaknesses.forEach((weakness) => {
    console.log(weakness);
    strength -= weakness.deduction;
    const messageElement = document.createElement('div');
    messageElement.textContent = weakness.message;
    reasonsContainer.appendChild(messageElement);
  });

  strengthMeter.removeAttribute('class');
  strengthMeter.classList.add('bar', `w-${strength}`);
  strengthMeter.textContent = `${strength}%`;

  if (strength <= 0) {
    strengthMeter.textContent = '';
    strengthMeter.removeAttribute('class');
  }

  if (strength <= 45) {
    strengthMeter.classList.add('danger')
  } else if (strength <= 75) {
    strengthMeter.classList.add('warning')
  } else if (strengthMeter.classList.contains('w-100')) {
    strengthMeter.classList.add('success')
  }
}

export default updateStrengthMeter;
