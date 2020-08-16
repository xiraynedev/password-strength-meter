function repeatCharactersWeakness(password) {
  const matches = password.match(/(.)\1/g) || [];
  const result = {
    message: '',
    deduction: 0,
  };

  if (matches.length > 0) {
    result.message = 'Your password has repeat characters';
    result.deduction = matches.length * 10;
  }

  return result;
}

export default repeatCharactersWeakness;
