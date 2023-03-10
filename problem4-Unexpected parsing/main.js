// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return {
    status: msg,
  };
}
console.log(getStatus(true));
// console.log(toCamelCase("Iam-love-Pizza"));
