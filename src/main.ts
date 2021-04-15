// CREATING VARIABLES

// this variable's type is its value, because TypeScript doesn't allow to override constants
const someVar = 'text';
// this variables type is string, since it was declared with let keyword
// although we cannot overide this variable with another type
let anotherVar: string = 'some other text';
// this code will error out
//anotherVar = true;


// SPECIFYING TYPES IN FUNCITONS

// specifying :string type is needed after function arguments to ensure that we return correct type
const printName = (firstName: string, lastName: string): string => {
  return firstName + ' ' + lastName;
}
console.log(printName('y', 'k'))


// CREATING OBJECTS

// TypeScript can read and understand types out of the box
// in JS there's no way to ensure that the object instances we created have proper structure
// by specifying names and field types, TS can alert us if the type is missing
const computer: { batteryLevel: number, type: string } = {
  batteryLevel: 100,
  type: 'laptop'
}

// this snippet will generate the following error message:
// error TS2741: Property 'type' is missing in type '{ batteryLevel: number; }' but required in type '{ batteryLevel: number; type: string; }'.
// const computer2: { batteryLevel: number, type: string } = {
//   batteryLevel: 90,
// }

// to avoid repetition, TypeScript has interfaces built out just for that and the reserved word for that is 'interface'
// interface's name should always be capitalized
// by default all properties set are mandatory, and that makes our code inflexible
// to define an optional property, the name should be followed by ? directly
interface Computer {
  batteryLevel: number;
  type: string;
  isCurrentlyCharging?: boolean;
}

// so this is how the code above will look like with interfaces:
const computer3: Computer = {
  batteryLevel: 90,
  type: 'pc'
}


// FUNCTIONS IN INTERFACES
interface ChatBot {
  recipient: string;
  sendMessage(): string;
}

const newBot: ChatBot = {
  recipient: "Yuliya",
  sendMessage(){
    return "Hello " + recipient + ". I'm a bot"
  },
}
