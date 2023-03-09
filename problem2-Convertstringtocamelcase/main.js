// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str) {
  let length = str.length;
  let arrayOfString = [...str];
  for (let i = 0; i < length; i++) {
    if (arrayOfString[i] == "-" || arrayOfString[i] == "_") {
      arrayOfString[i] = "";
      arrayOfString[i + 1] = arrayOfString[i + 1].toUpperCase();
    }
  }
  return arrayOfString.join("");
}
// console.log(toCamelCase("Iam-love-Pizza"));
