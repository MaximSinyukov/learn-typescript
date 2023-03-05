function combine(
    one: string | number | boolean,
    two: string | number | boolean,
    resultConversion: 'as-number' | 'as-text',
) {
  let result;

  // if (typeof one === 'number' && typeof two === 'number' ||  resultConversion === 'as-numbe') { error as-numbe
    if (typeof one === 'number' && typeof two === 'number' ||  resultConversion === 'as-number') {
    result = +one + +two;
  } else {
    result = one.toString() + two.toString();
  }

   return result;
}

const combinesAges = combine(30, 24, 'as-number');

const combinesStringAges = combine('30', '24', 'as-text');

const combineNames = combine('Valery', 'Borov', 'as-text');

console.log(combinesAges, combinesStringAges, combineNames);
