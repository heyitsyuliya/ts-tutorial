// WORKING WITH CLASSES

class ACUser {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

const newUser = new ACUser('Tom', 'Nook');
// we have access on all clas properties and methods here
// because everything in this class is public
console.log(newUser.firstName)


// PRIVATE, PUBLIC AND PROTECTED

// in TypeScript, just like Java everything is public by default, which means that
// we can use class methods and properties inside the class, outside of it, in children and instances
// of that class

// PRIVATE keywoard indicates that the variable can only be used inside the class
// so our class from above will look like this

class PrivateACUser {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

// now that we created an instance of the class, firstName and lastName should not be accessible anynmore
// method is the only thing available, since it's public
const nameNotAccessible = new PrivateACUser('Nom', 'Took');
console.log(nameNotAccessible.getFullName)

// PROTECTED keyword indicates that the variables can be used in class and it's children
class ProtectedName {
  protected firstname: string;
}

// READONLY
// variables that are marked as readonly cannot be changed. at all.


// Classes + Interfaces

interface CatInterface {
  sayMeow(): string;
}

class Cat implements CatInterface {
  readonly name: string;

  constructor(name: string){
    this.name = name;
  }

  changeName(): void {
    //this.name = 'a cat with no name'
  }

  sayMeow(): string {
    return this.name + " says meow!"
  }
}


// INHERITANCE IN TYPESCRIPT

class Trixie extends Cat {
  private canScratch: string;

  setCanScratch(canScratch: string): void {
    this.canScratch = canScratch;
  }

  getCanScratch(): string {
    return this.canScratch
  }
}

const trixieCat = new Cat('Trixie');
console.log(trixieCat)
