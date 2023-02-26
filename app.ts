function add(one: number, two: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(phrase + (one + two));
  } else {
    return one + two;
  }
}

let testvar1: number;
testvar1 = 23;
const testvar2 = 2.8;
const printResult = true;
let resultPhrase = "oh that is: ";
// resultPhrase = 65; error 

add(testvar1, testvar2, printResult, resultPhrase);
