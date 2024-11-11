import React from 'react';
import numeral from 'numeral';

function CurrencyFormatter({ price }) {
  const formatted = numeral(price).format('$0,0.00');
  return (
    <>
      {formatted}
    </>
  )
}

export default CurrencyFormatter
