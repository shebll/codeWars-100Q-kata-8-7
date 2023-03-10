// It's up to you to find out whether the cuboid has equal sides (= is a cube).
// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach((sheep) => {
    if (!sheep == null || !sheep == "undefine" || !sheep == false) {
      count++;
    }
  });
  return count;
}
// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter((x) => {
//     return x;
//   }).length;
// }
let array1 = [
  null,
  ,
  ,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
console.log(countSheeps(array1));
// console.log(toCamelCase("Iam-love-Pizza"));
