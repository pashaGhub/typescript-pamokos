var myStudent;
var myPersonKey = "id";
var me = {
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
var you = {
    id: 456,
    name: "Margarita",
    surname: "Atiragram"
};
var meId = me.id;
var youId = you.id;
var myAccomodation = {
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
    setAddress: function (val) {
        this.address = val;
    },
    setSquare: function (val) {
        this.square = val;
    },
    setType: function (val) {
        this.type = val;
    }
};
console.log("Before: ", myAccomodation.getType());
console.log(myAccomodation.setType("cottage"));
console.log("After: ", myAccomodation.getType());
