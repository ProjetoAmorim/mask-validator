import { maskPhone, validatePhone } from './index';

const testPhoneNumbers = ['11987654321', '21987654321', '99987654321'];

testPhoneNumbers.forEach((phone) => {
  console.log(`Mascarando número: ${phone} -> ${maskPhone(phone)}`);
  console.log(`Validando número: ${phone} -> ${validatePhone(phone)}`);
});
