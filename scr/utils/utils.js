export const calcAmount = total => {
  const totalPrices = Object.keys(total);
  const totalsArray = totalPrices.map(key => {
    return total[key].totalPrice;
  });

  var p = 0;
  totalsArray.forEach(price => {
    p += price;
  });

  return p;
};
