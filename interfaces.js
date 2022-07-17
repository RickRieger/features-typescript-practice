var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
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
var printVehicle = function (vehicle) {
    // Can use template strings to make more clear
    "this is a template string ".concat(vehicle.name, "\n    what if I keep going ").concat(vehicle.year);
};
printVehicle(oldCivic);
