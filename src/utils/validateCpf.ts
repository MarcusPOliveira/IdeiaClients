function validateCpf(cpf: string) {
  function validateFirstStep(cpf: string) {
    const cpfFormatted = cpf.split('').map((e) => parseInt(e));
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += cpfFormatted[i] * (10 - i);
    }
    const result = (sum * 10) % 11;
    if (result < 10) {
      return result == cpfFormatted[9];
    } else {
      return cpfFormatted[9] == 0;
    }
    return cpfFormatted;
  }
  function validateSecondStep(cpf: string) {
    const cpfFormatted = cpf.split('').map((e) => parseInt(e));
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += cpfFormatted[i] * (11 - i);
    }
    const result = (sum * 10) % 11;
    if (result < 10) {
      return result == cpfFormatted[10];
    } else {
      return cpfFormatted[10] == 0;
    }
    return cpfFormatted;
  }
  function validateRepetition(cpf: string) {
    const cpfFormatted = cpf.split('').map((e) => parseInt(e));
    const firstDigit = cpfFormatted[0];
    let differentDigit = false;
    for (let i = 1; i < cpfFormatted.length; i++) {
      if (cpfFormatted[i] != firstDigit) {
        differentDigit = true;
      }
    }
    return differentDigit;
  }

  if (cpf == undefined) {
    return false;
  }
  if (cpf.length != 11) {
    return false;
  }
  if (!validateRepetition(cpf)) {
    return false;
  }
  if (!validateFirstStep(cpf)) {
    return false;
  }
  if (!validateSecondStep(cpf)) {
    return false;
  }
  return true;

}

export { validateCpf };
