"use strict";
let num = 123;
let bool;
bool = true;
const str = "cia const";
let idk = 2;
idk = "kazkas kito";
let direction = "South";
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
["North", "South"];
if (direction === Direction.South) {
}
let arrNum = [];
let arrNum2 = [];
arrNum.push(2);
let arrStr = ["labas", "ate", "kaip gyveni?"];
arrStr.push("geeerai!");
let arr = [1, 2, "labas", 523, true];
arr.push(12314);
arr.push("hello");
arr.push(false);
let pavel = {
    name: "Pavel",
    surname: "Sucharev",
    age: 27,
};
let gawel = {
    name: "Gawel",
    surname: "Gucharev",
    age: 27,
};
let persons = [{ name: "Margarita", surname: "Atiragram" }];
persons.push(pavel);
persons.push(gawel);
let person = {
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
let tiger = {
    age: 123,
    weight: 200,
    skin: "brown",
    eatMeat: true,
};
let zebra = {
    age: 123,
    weight: 200,
    skin: "brown",
    eatMeat: false,
};
let name2 = "pavel";
const testFunk = (num1, num2) => num1 * num2;
const result = testFunk(2, 3);
console.log(result);
const addNumb = (num1, num2) => {
    num1 + num2;
};
const res = addNumb(2, 7);
console.log("addNumb", res);
const divideNumb = (num1, num2) => num1 / num2;
console.log("divideNumb", divideNumb(12, 3));
//# sourceMappingURL=index.js.map