// WEIRD TS TYPES

// VOID
const printMessage = (): void => {
  console.log('printing a message');
  // right now the type of this function is void
  // because it does not return anything
  // void is a set of undefined and null
}

// ANY
// type any will turn off all typescript checks
let foo: any = 'this value could be anything';
// the following line will not trigger any errors
console.log(foo.bar())
// avoid using any at ANY COST


// NEVER
// function with never cannot be executed to the end
// so the code below will error out
const doSomething = (): never => {
  console.log('something')
  // adding the line below resolves the initial error message
  throw 'never'
}

// UNKNOWN (introduced in TS3)
let anyVar: any = 10;
let unknownVar: unknown = 10;

// let's assign any variable with a type
// this works as expected, we can assign the variable with no problems
let stringVar: string = anyVar;

// although this line will error out with a following message:
// Type 'unknown' is not assignable to type 'string'.
//let otherStringVar: string = unknownVar;

// the code below will not work, since method .foo() does not exist on otherStringVar
// to resolve this issue, we will neet to assert the type
console.log(anyVar.foo())
//console.log(otherStringVar.foo())

// TYPE ASSERTION
// Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.
// Usually, this will happen when you know the type of some entity could be more specific than its current type.
// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
// A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data.
// It has no runtime impact and is used purely by the compiler.
// TypeScript assumes that you, the programmer, have performed any special checks that you need.

let otherStringVar: string = unknownVar as string;

let pageNumber: string = '1';
// we can't deirectly reassign string value to a number value, so the line below will eror out
//let numericPageNumber: number = pageNumber as number;

// what we need to do is first convert the string value to unknown and then convert that value into number, like so
let numericPageNumber2: number = (pageNumber as unknown) as number;
