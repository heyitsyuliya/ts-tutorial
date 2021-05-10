// GENERICS

// In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics,
// that is, being able to create a component that can work over a variety of types rather than a single one.
// This allows users to consume these components and use their own types.

// in this case if we don't specify a type of incoming data for the funciton,
// typescript will automatically assign ANY
// to avoid unexpected behavior, we need to assign some generic type, we can do so with <T>
// all generic datatypes are specified within angle brackets

// looking at this function we know, that we need to be more specific than just passing in generic datatype
// we need an object, because the spread operator won't work on the string
const addId = <T extends object>(obj: T) => {

  const id = Math.random().toString(16)

  return {
    ...obj,
    id
  }
}

interface GenericUserInterface {
  name: string;
}

const someUser: GenericUserInterface = {
  name: 'Bob'
}

// here we're passing in GenericUserInterfacse as a generic data type
// typescript already knows that it will receive a generic data type, but it's best to be explicit
// the problem with generic data types is that we can just passs string as a type, like so
// const result = addId<string>('IamNotAnObjectHaHa')
// and the code will still work
const result = addId<GenericUserInterface>(someUser);
console.log(result);


// USING GENERICS WITH INTERFACES
// generic interfaces allow us to provide different data types
// to make interfaces generic, we need to add <T> after the name of the interface, like so
// to specify the generic type, it doesn't have to be a T, this could be any letter instead
interface GenericInterface<T> {
  name: string;
  data: T;
}

// we must provide a generic type if there's no default
// in this case we have specified that our generic type for this variable will have property meta
// and that property will contain a value that's string
// and all of that will come in as part of data property, as it has a generic type of T
const genericUser: GenericInterface<{ meta: string }> = {
  name: 'Frenny',
  data: {
    meta: 'some user metadata'
  }
}

// here we specify that the generic type will be an array of strings
const genericUser2: GenericInterface<string[]> = {
  name: 'Omar',
  data: ['thing1', 'thing2', 'thing3']
}


// PASSING MULTIPLE GENERIC DATA TYPES
interface RubberDuckyInterface<T, V> {
  name: string;
  letter: T;
  word: V;
}

const ducky: RubberDuckyInterface<string, string> = {
  name: 'neal',
  letter: 'a',
  word: 'astronaut'
}
