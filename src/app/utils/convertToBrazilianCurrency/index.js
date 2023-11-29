export default function convertToBrazilianCurrency(value) {
  return value
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace(',00', '');
}
