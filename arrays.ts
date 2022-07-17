// const carMakers:string[] = ['ford', 'nissan', 'kia'];
const carMakers = ['ford', 'nissan', 'kia'];

// Array within  an array
const carsByMake: [][] = [];

// Prevents incompatible values
carMakers.push(100);

// Help with 'map' when declaring a string will be returned the
// auto complete shows up with options for the string object.
carMakers.map((car: string) => {
  return car.toLocaleUpperCase();
});

// If you want multiple values inside the array you need to
// define which ones if they aren't already handled by type Inference.
const multipleValues = [true, 'rick', new Date()];
let multipleValues2: (string | boolean)[];
