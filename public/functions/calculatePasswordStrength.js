import lengthWeakness from './lengthWeakness.js';
import characterTypeWeakness from './characterTypeWeakness.js';
import repeatCharactersWeakness from './repeatCharactersWeakness.js';

function calculatePasswordStrength(password) {
  const weaknesses = [];
  weaknesses.push(lengthWeakness(password));
  weaknesses.push(characterTypeWeakness(password, /[a-z]/g, 'lowercase'));
  weaknesses.push(characterTypeWeakness(password, /[A-Z]/g, 'uppercase'));
  weaknesses.push(characterTypeWeakness(password, /[0-9]/g, 'number'));
  weaknesses.push(
    characterTypeWeakness(password, /[^a-zA-Z0-9\s]/g, 'special')
  );
  weaknesses.push(repeatCharactersWeakness(password));
  return weaknesses;
}

export default calculatePasswordStrength;
