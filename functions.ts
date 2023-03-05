function add(n1: number, n2: number):number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addHandler(m1: number, m2: number, dd: (n: number) => void) {
  const res = m1 + m2;
  dd(res);
}

printResult(add(5, 12));

let combVal: (ab: number, bb: number) => number;

combVal = add;
// combVal = printResult;
// combVal = 5; // get error

console.warn(combVal(30, 24));

addHandler(30, 54, (numb) => {
  console.warn(numb);
});