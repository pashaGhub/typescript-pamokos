/* <input id="name" type="text"> */
// HTMLInputElement
// HTMLInputElement.value
var nameInput = document.getElementById("name");
console.log(nameInput.value);
var myObj = {};
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
var choice = "vegetables";
