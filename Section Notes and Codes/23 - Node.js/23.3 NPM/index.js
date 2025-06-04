// var generateName = require("sillyname");

// import generateName from "./node_modules/sillyname/index.js"
// var sillyName = generateName();

// console.log(`My name is ${sillyName}`);


// import superheroes from "./node_modules/superheroes/index.js"
// const superheroName = superheroes.random();
// console.log(`I am ${superheroName}!`);

import {randomSuperhero} from 'superheroes';
const newName = randomSuperhero();
console.log(newName);