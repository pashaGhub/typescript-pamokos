var num = 123;
var bool;
bool = true;
var str = "cia const";
var idk = 2;
idk = "kazkas kito";
var direction = 1;
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
if (direction === Direction.South) {
    //eina i siaure
    console.log("eina i siaure");
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
console.log(persons);
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
