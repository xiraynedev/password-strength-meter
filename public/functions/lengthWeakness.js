function lengthWeakness(password) {
  const length = password.length;
  const result = {
    message: 'Please enter a password',
    deduction: 100,
  };

  if (!length) {
    return result;
  }

  if (length <= 4) {
    result.message = 'Password is too short';
    result.deduction = 40;
  } else if (length <= 8) {
    result.message = 'Password could be a little longer';
    result.deduction = 15;
  } else {
    (result.message = 'Password is long enough'), (result.deduction = 0);
  }

  return result;
}

export default lengthWeakness;
