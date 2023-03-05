// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Max',
//   age: 24,
// };

const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string] // Tuple type
} = {
  name: 'Max',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

person.role.push('admin');
// person.role[1] = 10; // error from Tuple type
// person.role = [0, 'admin', 'user']; // error length from Tuple type 

let favoriteActivities: string[];
// favoriteActivities = 'Sports'; get error
// favoriteActivities = ['Sports', 1]; error from number set any[]
favoriteActivities = ['Sports', '1'];

// console.log(person.notexistprop); // get error

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // error
}