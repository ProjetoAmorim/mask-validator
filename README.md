
# mask-validator
Criação de uma biblioteca no NPM utilizando TypeScript. Esta biblioteca terá a função de realizar o mascaramento de números de celular, CPF, CNPJ e CEP, além de validar esses campos. Para o número de CELULAR, a validação tem que incluir a região por ddd, sem utilizar bibliotecas de terceiros.
>>>>>>> 71bdf64ff8a8c7013d03a44d8b7b3af6344d4c79
# Mask Validator

Uma biblioteca para mascarar e validar CPF, CNPJ, números de celular (com DDD) e CEP brasileiros, construída com TypeScript.

## Instalação

Para instalar a biblioteca, utilize o seguinte comando:

```bash
npm install mask-validator

Uso
Aqui estão alguns exemplos de como utilizar as funções disponíveis na biblioteca.

Mascarar e Validar CPF

import { maskCPF, validateCPF } from 'mask-validator';

const cpf = '12345678909';
console.log(maskCPF(cpf));  // Saída: 123.456.789-09
console.log(validateCPF(cpf));  // Saída: true

Mascarar e Validar CNPJ
import { maskCNPJ, validateCNPJ } from 'mask-validator';

const cnpj = '12345678000195';
console.log(maskCNPJ(cnpj));  // Saída: 12.345.678/0001-95
console.log(validateCNPJ(cnpj));  // Saída: true

Mascarar e Validar Números de Celular
import { maskPhone, validatePhone } from 'mask-validator';

const celular = '11987654321';
console.log(maskPhone(celular));  // Saída: (11) 98765-4321
console.log(validatePhone(celular));  // Saída: true

Mascarar e Validar CEP
import { maskCEP, validateCEP } from 'mask-validator';

const cep = '12345678';
console.log(maskCEP(cep));  // Saída: 12345-678
console.log(validateCEP(cep));  // Saída: true

API
Aqui estão as descrições das funções disponíveis na biblioteca.

maskCPF(cpf: string): string
Mascarar um número de CPF no formato 123.456.789-09.

validateCPF(cpf: string): boolean
Valida se o CPF está no formato correto e se passa na validação oficial de dígitos verificadores.

maskCNPJ(cnpj: string): string
Mascarar um número de CNPJ no formato 12.345.678/0001-95.

validateCNPJ(cnpj: string): boolean
Valida se o CNPJ está no formato correto e se passa na validação oficial de dígitos verificadores.

maskPhone(phone: string): string
Mascarar um número de celular brasileiro (com DDD) no formato (99) 99999-9999.

validatePhone(phone: string): boolean
Valida se um número de celular tem 11 dígitos e pertence a uma região com DDD válido.

maskCEP(cep: string): string
Mascarar um código postal brasileiro (CEP) no formato 12345-678.

validateCEP(cep: string): boolean
Valida se um CEP tem 8 dígitos e está no formato correto.

Contribuições
Sinta-se à vontade para contribuir com o projeto. Basta fazer um fork e enviar um pull request com melhorias ou correções.

>>>>>>> 71bdf64ff8a8c7013d03a44d8b7b3af6344d4c79
