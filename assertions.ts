/* <input id="name" type="text"> */
// HTMLInputElement
// HTMLInputElement.value
const nameInput = document.getElementById("name") as HTMLInputElement;
console.log(nameInput.value);

interface Employee {
  name: string;
  code: number;
}

let myObj = {} as Employee;
myObj.name = "Pavel";

function worldSides(side: "north" | "south" | "east" | "west"): void {
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

type Food = "meat" | "vegetables";

const choice: Food = "vegetables";
