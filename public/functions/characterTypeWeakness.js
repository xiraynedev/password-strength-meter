function characterTypeWeakness(password, regex, type) {
  const matches = password.match(regex) || [];
  const result = {
    message: ``,
    deduction: 0,
  };

  if (!matches) {
    result.message = `Your password has no ${type} characters`;
    result.deduction = 20;
  }

  if (matches.length < 1) {
    result.message = `Your password could use more ${type} characters`;
    result.deduction = 5;
  }

  return result;
}

export default characterTypeWeakness;
