const ParkingSystem = function(big, medium, small) {
  this.spaces = [null, big, medium, small];
};

ParkingSystem.prototype.addCar = function(carType) {
  return this.spaces[carType] ? this.spaces[carType]-- : 0;
};

// Input
// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]
// Output
// [null, true, true, false, false]
const parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1));
console.log(parkingSystem.addCar(2));
console.log(parkingSystem.addCar(3));
console.log(parkingSystem.addCar(1));
