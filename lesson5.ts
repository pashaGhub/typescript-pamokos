interface Human {
    id: number,
    name:string,
    surname: string,
}

type Student = Human & {
    class: string
}

let myStudent: Student


type MyPersonKeys = keyof Human // "id" | "name" | "surname"
let myPersonKey: MyPersonKeys = "id"

const me: Human = {
    id: 12838591238,
    name: "Pavel",
    surname: "Sucharev"
}

switch (myPersonKey as MyPersonKeys) {
    case "id":
        me.id = 123
        break;
    case "name":
        me.name = "Pavelas"
        break;
    default:
        break;
}



const you:  Human = {
    id: 456,
    name: "Margarita",
    surname: "Atiragram"
}
type MyPersonId = Human["id"]

const meId: MyPersonId = me.id
const youId: MyPersonId = you.id


type Accomodation = {
    address: string,
    square: number,
    type: "flat"|"house"|"cottage",
}

type AccomodationGetter = {
    [key in keyof Accomodation as `get${Capitalize<key>}`]: ()=> Accomodation[key]
}
type AccomodationSetter = {
    [key in keyof Accomodation as `set${Capitalize<key>}`]: (val:Accomodation[key] )=> void
}

type AccomodationIncapsulated = Accomodation & AccomodationGetter & AccomodationSetter

let myAccomodation: AccomodationIncapsulated = {
    address: "Katedros aikste",
    square: 1,
    type: "flat",
    getAddress: function() {
        return this.address
    },
    getSquare: function() {
        return this.square
    },
    getType: function() {
        return this.type
    },
    setAddress: function(val) {
        this.address = val
    },
    setSquare: function(val) {
        this.square = val
    },
    setType: function(val) {
        this.type = val
    },
}

console.log("Before: ", myAccomodation.getType());
myAccomodation.setType("cottage")
console.log("After: ",myAccomodation.getType());

type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }


