"use strict";
const nameInput = document.getElementById("name");
console.log(nameInput.value);
let myObj = {};
myObj.name = "Pavel";
function worldSides(side) {
    switch (side) {
        case "north":
            console.log("you are going north");
            break;
        case "south":
            console.log("you are going south");
            break;
        default:
            break;
    }
}
worldSides("south");
const choice = "vegetables";
//# sourceMappingURL=assertions.js.map