const validCpfAuth = (cpf, password) => {
  if (!cpf && !password) {
    return {
      cpfMsg: 'Por favor, preencha seu CPF',
      passwordMsg: 'Por favor, preencha sua senha',
    };
  }

  if (!cpf) {
    return {
      cpfMsg: 'Por favor, preencha seu CPF',
      passwordMsg: '',
    };
  }

  if (!password) {
    return {
      emailMessage: '',
      passwordMsg: 'Por favor, preencha sua senha',
    };
  }

  if (TestaCPF(cpf)) {
    return (
      {
        cpfMsg: 'Cpf válido',
        validate: true,
      }
    );
  }

  return (
    {
      cpfMsg: 'Por favor, insira um CPF válido',
      validate: false,
    }
  );
};

function TestaCPF(strCPF) {
  // eslint-disable-next-line no-param-reassign
  strCPF = strCPF.split('.').join('').split('-').join('');

  let Soma;
  let Resto;
  Soma = 0;
  if (strCPF === '00000000000') return false;

  for (let i = 1; i <= 9; i++) Soma += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11)) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(9, 10), 10)) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i++) Soma += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11)) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(10, 11), 10)) return false;
  return true;
}

export default validCpfAuth;
