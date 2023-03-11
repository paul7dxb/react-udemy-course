// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// let person: {
//   name: string;
//   age: number;
// };

// person = {
//   name: 'Max',
//   age: 32
// };

// person = {
//   isEmployee: true
// };

// let people: {
//   name: string;
//   age: number;
// }[];

// These object declarations can be improved with type alias

// Base type
type Person = {
  name: string;
  age: number;
};

let person: Person;
let people: Person[];

// Funcitons
function add(a: number, b: number): number | string {
  return a + b;
}

// Void function never returns. Assigned will be undefined
function printOutput(value: any): void {
    console.log(value)
}

// Generics
function insertAtBeginning(array: any[], value: any){
    const newArray = [value, ...array]
    return newArray
}

const demoArray = [1,2,3]
const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
// Typescript will not know that updatedArray is type number

// Make function with genercis
function insertAtBeginningGenerics<T>(array: T[], value: T){
    const newArray = [value, ...array]
    return newArray
}

// Now calling function TS will be able to understand the array type
const stringArray = insertAtBeginningGenerics(['a','b','c'], 'd'); // ['a','b','c', 'd'] type: string[]
