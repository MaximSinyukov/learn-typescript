let example: unknown;
let text: string;

example = 54;
example = 'hi bro';

// text = example; // not working because unknown not equals string, but will working with "any"

if (typeof example == 'string') {
  text = example;
}