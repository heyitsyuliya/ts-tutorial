// CREATING VARIABLES
// this variable's type is its value, because TypeScript doesn't allow to override constants
var someVar = 'text';
// this variables type is string, since it was declared with let keyword
// although we cannot overide this variable with another type
var anotherVar = 'some other text';
// this code will error out
//anotherVar = true;
// SPECIFYING TYPES IN FUNCITONS
// specifying :string type is needed after function arguments to ensure that we return correct type
var printName = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(printName('y', 'k'));
// CREATING OBJECTS
// TypeScript can read and understand types out of the box
// in JS there's no way to ensure that the object instances we created have proper structure
// by specifying names and field types, TS can alert us if the type is missing
var computer = {
    batteryLevel: 100,
    type: 'laptop'
};
// so this is how the code above will look like with interfaces:
var computer3 = {
    batteryLevel: 90,
    type: 'pc'
};
var newBot = {
    recipient: "Yuliya",
    sendMessage: function () {
        return "Hello " + recipient + ". I'm a bot";
    },
};
//# sourceMappingURL=main.js.map