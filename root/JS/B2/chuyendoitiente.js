const price = 21450;
const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});
console.log('Dollars: ' + USDollar.format(price)); // Dollars: $21,450.00
console.log('Việt Nam đồng: ' + VND.format(price)); // Việt Nam đồng: 21.450 ₫