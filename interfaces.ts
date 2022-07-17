interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};
// Type annotations can become pretty long, so there is a better approach
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   // Can use template strings to make more clear
//   console.log(vehicle.name);
//   console.log(vehicle.year);
//   console.log(vehicle.broken);
// };
const printVehicle = (vehicle: Vehicle): void => {
  // Can use template strings to make more clear

  console.log(`this is a template string ${vehicle.name}
  what if I keep going ${vehicle.year}`);
};
printVehicle(oldCivic);
