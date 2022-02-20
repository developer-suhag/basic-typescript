// type
const a: string = "hello world";

function getLowerCase(str: string) {
  return str.toLocaleLowerCase();
}

console.log(getLowerCase("Hello World"));

const b: number = 32;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(3, 4);

const substract = (num1: number, num2: number): number => {
  return num1 - num2;
};

substract(5, 6);

const arr: number[] = [4, 506, 64];
const arr1: string[] = ["adsf", "asdf", "sdf"];

const arr2: Array<number | string> = [56, "adf", "adsf", 78];

type numberAndString = string | number;

const d: numberAndString = "dadf";

// interface

interface IPerson {
  name: string;
  age: number;
  hobby?: string;
}

const person: IPerson = {
  name: "Suhag",
  age: 22,
  hobby: "Programming",
};

const person2: IPerson = {
  name: "Mokta",
  age: 21,
};

// enum

enum Colors {
  color1 = "#fff",
  color2 = "#222",
  color3 = "#f7f7f7",
}

console.log(Colors.color1);

// Generic -->

// function _concat<T>(a: T, b: T): T {
//   return a + b;
// }

// _concat<number>(4, 5);
// _concat<string>("Suhag", "Mokta");
