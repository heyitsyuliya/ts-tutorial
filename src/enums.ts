// ENUMS IN TYPESCRIPT
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent,
// or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

// const statuses = {
//   notStarted: 0,
//   inProgress: 1,
//   done: 2
// }
// console.log(statuses.inProgress)

// this code wll have the same output as above, the only difference is we're capitalizing the names
// and not specifing the values
// each of these statuses have a numeric value starting from 0 assigned to them, just like in the example above
enum StatusEnum {
  NotStarted,
  InProgress,
  Done
}
// in the output you will see that this statement will return the same esult as above - 1.
console.log(StatusEnum.InProgress);


// The main benefit of using enums in typescript is that we can use them as a value AND as a data type

// in this example notStartedStatus is a value of type Status
let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

// but at the same time it's also a datatype, because the following assignment is failing
// we cannot assign type string to type Status
// notStartedStatus = 'new status'
// with that said, whatever we reassign this variable to has to be of type Status, like so
notStartedStatus = StatusEnum.Done;


// ASSIGNING DIFFERENT VALUE TYPES TO ENUMS
enum StatusWithAssignment {
  NotStarted = 'not started',
  InProgress = 'in progress',
  Done = 'done'
}


// USING ENUMS INSIDE INTERFACES
interface Task {
  id: string;
  status: StatusEnum;
}

