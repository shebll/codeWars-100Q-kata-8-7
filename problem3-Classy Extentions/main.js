// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    return `${this.name} meows.`;
  }
}
let cat1 = new Cat("aa");

console.log(cat1.speak());
// console.log(toCamelCase("Iam-love-Pizza"));
