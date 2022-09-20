"use strict";
let myStudent;
let myPersonKey = "id";
const me = {
    id: 12838591238,
    name: "Pavel",
    surname: "Sucharev"
};
switch (myPersonKey) {
    case "id":
        me.id = 123;
        break;
    case "name":
        me.name = "Pavelas";
        break;
    default:
        break;
}
const you = {
    id: 456,
    name: "Margarita",
    surname: "Atiragram"
};
const meId = me.id;
const youId = you.id;
let myAccomodation = {
    address: "Katedros aikste",
    square: 1,
    type: "flat",
    getAddress: function () {
        return this.address;
    },
    getSquare: function () {
        return this.square;
    },
    getType: function () {
        return this.type;
    },
};
myAccomodation.getAddress();
//# sourceMappingURL=lesson5.js.map