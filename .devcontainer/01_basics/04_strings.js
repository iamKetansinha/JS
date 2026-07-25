const name = "Ketan"
const repoCount = 2

//console.log(name + ":" + repoCount);

console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`); // string interpolation

const gameName = new String('ketan04')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4));
console.log(gameName.indexOf(4));
console.log(gameName.substring(0, 3));

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString = "   ketan    "
console.log(newString);
console.log(newString.trim(newString));

const url = "https://ketan.com/ketan%20sinha"

console.log(url.replace("%20", "-"));
