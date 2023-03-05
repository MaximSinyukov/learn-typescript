function combine(one: string | number | boolean, two: string | number | boolean) {
  let result;

  if (typeof one === 'number' && typeof two === 'number') {
    result = one + two;
  } else {
    result = one.toString() + two.toString();
  }

  return result;
}

const combinesAges = combine(30, 24);

const combineNames = combine('Valery', 'Borov');

console.log(combinesAges, combineNames);
