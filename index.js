var num = 123;
var bool;
bool = true;
var str = "cia const";
var idk = 2;
idk = "kazkas kito";
var direction = "South";
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
["North", "South"];
if (direction === Direction.South) {
    //eina i siaure
    // console.log("eina i siaure");
}
var arrNum = [];
var arrNum2 = [];
arrNum.push(2);
// arrNum.push("4");
var arrStr = ["labas", "ate", "kaip gyveni?"];
arrStr.push("geeerai!");
var arr = [1, 2, "labas", 523, true];
arr.push(12314);
arr.push("hello");
arr.push(false);
var pavel = {
    name: "Pavel",
    surname: "Sucharev",
    age: 27
};
var gawel = {
    name: "Gawel",
    surname: "Gucharev",
    age: 27
};
var persons = [{ name: "Margarita", surname: "Atiragram" }];
persons.push(pavel);
persons.push(gawel);
var person = {
    name: "Pavel",
    surname: "Sucharev",
    age: 27
};
person.name = "Pedro";
person.surname = "Muche";
person.age = "twenty two";
person = {
    name: "pedro",
    surname: "Muche"
};
var tiger = {
    age: 123,
    weight: 200,
    skin: "brown",
    eatMeat: true
};
var zebra = {
    age: 123,
    weight: 200,
    skin: "brown",
    eatMeat: false
};
var name2 = "pavel";
var testFunk = function (num1, num2) { return num1 * num2; };
var result = testFunk(2, 3);
console.log(result);
var addNumb = function (num1, num2) {
    num1 + num2;
};
var res = addNumb(2, 7);
console.log("addNumb", res);
var divideNumb = function (num1, num2) { return num1 / num2; };
console.log("divideNumb", divideNumb(12, 3));
