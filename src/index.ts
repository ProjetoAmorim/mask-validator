export const maskCPF = (cpf: string): string => {
  const cleanedCPF = cpf.replace(/\D/g, '');  // Remove tudo que não for número
  if (cleanedCPF.length !== 11) {
    throw new Error('CPF inválido');
  }
  return cleanedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

//Função para validar o CPF
export const validateCPF = (cpf: string): boolean => {
  const cleanedCPF = cpf.replace(/\D/g, '');  // Remove tudo que não for número
  if (cleanedCPF.length !== 11) {
    return false;
  }

  // Algoritmo de validação do CPF
  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanedCPF.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanedCPF.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanedCPF.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanedCPF.substring(10, 11))) return false;

  return true;
};

//Função para mascarar CNPJ:
export const maskCNPJ = (cnpj: string): string => {
  const cleanedCNPJ = cnpj.replace(/\D/g, '');  // Remove caracteres não numéricos
  if (cleanedCNPJ.length !== 14) {
    throw new Error('CNPJ inválido');
  }
  return cleanedCNPJ.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
};

//Função para validar CNPJ:
export const validateCNPJ = (cnpj: string): boolean => {
  const cleanedCNPJ = cnpj.replace(/\D/g, '');
  if (cleanedCNPJ.length !== 14) {
    return false;
  }

  // Algoritmo de validação de CNPJ (simplificado)
  let tamanho = cleanedCNPJ.length - 2;
  const numeros = cleanedCNPJ.substring(0, tamanho);
  const digitos = cleanedCNPJ.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(0))) return false;

  tamanho = tamanho + 1;
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(1))) return false;

  return true;
};

//Função para mascarar número de celular:
export const maskPhone = (phone: string): string => {
  const cleanedPhone = phone.replace(/\D/g, '');
  if (cleanedPhone.length !== 11) {
    throw new Error('Número de celular inválido');
  }
  return cleanedPhone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};

//Função para validar número de celular com DDD:
const validDDDs = [11, 21, 31, 41, 51, 61, 71, 81];  // Exemplo de DDDs válidos

export const validatePhone = (phone: string): boolean => {
  const cleanedPhone = phone.replace(/\D/g, '');
  if (cleanedPhone.length !== 11) {
    return false;
  }
  const ddd = parseInt(cleanedPhone.substring(0, 2));
  if (!validDDDs.includes(ddd)) {
    return false;
  }
  return true;
};

