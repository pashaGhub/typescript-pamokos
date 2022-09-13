let num: number = 123;
let bool: boolean;
bool = true;
const str: string = "cia const";

let idk: any = 2;
idk = "kazkas kito";

let direction = 1;
enum Direction {
  North,
  South,
  East,
  West,
}

if (direction === Direction.South) {
  //eina i siaure
  console.log("eina i siaure");
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
console.log(persons);
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
