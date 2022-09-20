let num: number = 123;
let bool: boolean;
bool = true;
const str: string = "cia const";

let idk: any = 2;
idk = "kazkas kito";

let direction = "South";
enum Direction {
  North = "North",
  South = "South",
  East = "East",
  West = "West",
}
["North", "South"];

if (direction === Direction.South) {
  //eina i siaure
  // console.log("eina i siaure");
}

let arrNum: number[] = [];
let arrNum2: Array<number> = [];

arrNum.push(2);
// arrNum.push("4");

let arrStr = ["labas", "ate", "kaip gyveni?"];

arrStr.push("geeerai!");

let arr = [1, 2, "labas", 523, true];

arr.push(12314);
arr.push("hello");
arr.push(false);

interface Person {
  name: string;
  surname: string;
  age?: number | string;
}

let pavel: Person = {
  name: "Pavel",
  surname: "Sucharev",
  age: 27,
};

let gawel: Person = {
  name: "Gawel",
  surname: "Gucharev",
  age: 27,
};

let persons: Person[] = [{ name: "Margarita", surname: "Atiragram" }];
persons.push(pavel);
persons.push(gawel);

let person: Person = {
  name: "Pavel",
  surname: "Sucharev",
  age: 27,
};

person.name = "Pedro";
person.surname = "Muche";
person.age = "twenty two";

person = {
  name: "pedro",
  surname: "Muche",
};

type Animal = {
  age: number;
  weight: number;
  skin: string;
  eatMeat: boolean;
};

let tiger: Animal = {
  age: 123,
  weight: 200,
  skin: "brown",
  eatMeat: true,
};

let zebra: Animal = {
  age: 123,
  weight: 200,
  skin: "brown",
  eatMeat: false,
};

let name2: string = "pavel";

type MyFunk = (num1: number, num2: number) => number;

const testFunk: MyFunk = (num1, num2) => num1 * num2;

const result: number = testFunk(2, 3);
console.log(result);

interface FunkInter {
  (num1: number, num2: number): void;
}

const addNumb: FunkInter = (num1, num2) => {
  num1 + num2;
};

const res = addNumb(2, 7);
console.log("addNumb", res);

const divideNumb = (num1: number, num2: number): number => num1 / num2;
console.log("divideNumb", divideNumb(12, 3));
