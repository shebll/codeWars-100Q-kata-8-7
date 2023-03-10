// It's up to you to find out whether the cuboid has equal sides (= is a cube).
// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

let cubeChecker = function (volume, side) {
  if (side == 0 || volume == 0 || side < 0 || volume < 0) {
    return false;
  }
  return Math.pow(side, 3) == volume ? true : false;
};
console.log(cubeChecker(8, 2));
// console.log(toCamelCase("Iam-love-Pizza"));
