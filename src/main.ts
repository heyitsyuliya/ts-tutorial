interface UserInterface {
  firstName: string
  lastName: string
}

let username: string = 'yuliya';
let user: UserInterface | null =  null;


// USING TYPESCRIPT WITH DOM ELEMENTS
// When dealing with HTML elements in typescript, it doesn't know how to deal with the markup, TS simply skips it
// That's why we need to specify the exact types of elements we're dealing with

// Element is the highest class in the hierarchy
const profileCard = document.querySelector('.main')

// this will throw an error that property value does not exist on Element
//console.log('profile card', profileCard.value)

// to fix the issue, said element needs to be converted into a more specific type like this
const htmlElement = document.querySelector('.profile') as HTMLInputElement;
// and now that TypeScript knows what exact kind of element it's dealing with
// we have access to all html element properties
console.log('new html element', htmlElement.value)

