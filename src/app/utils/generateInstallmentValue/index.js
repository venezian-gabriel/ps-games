import convertToBrazilianCurrency from '../convertToBrazilianCurrency';

export default function generateInstallmentValue(value) {
  return convertToBrazilianCurrency(value / 10);
}
