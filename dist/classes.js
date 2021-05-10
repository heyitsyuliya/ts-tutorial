// WORKING WITH CLASSES
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ACUser = /** @class */ (function () {
    function ACUser(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ACUser.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return ACUser;
}());
var newUser = new ACUser('Tom', 'Nook');
// we have access on all clas properties and methods here
// because everything in this class is public
console.log(newUser.firstName);
// PRIVATE, PUBLIC AND PROTECTED
// in TypeScript, just like Java everything is public by default, which means that
// we can use class methods and properties inside the class, outside of it, in children and instances
// of that class
// PRIVATE keywoard indicates that the variable can only be used inside the class
// so our class from above will look like this
var PrivateACUser = /** @class */ (function () {
    function PrivateACUser(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PrivateACUser.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return PrivateACUser;
}());
// now that we created an instance of the class, firstName and lastName should not be accessible anynmore
// method is the only thing available, since it's public
var nameNotAccessible = new PrivateACUser('Nom', 'Took');
console.log(nameNotAccessible.getFullName);
// PROTECTED keyword indicates that the variables can be used in class and it's children
var ProtectedName = /** @class */ (function () {
    function ProtectedName() {
    }
    return ProtectedName;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.changeName = function () {
        //this.name = 'a cat with no name'
    };
    Cat.prototype.sayMeow = function () {
        return this.name + " says meow!";
    };
    return Cat;
}());
// INHERITANCE IN TYPESCRIPT
var Trixie = /** @class */ (function (_super) {
    __extends(Trixie, _super);
    function Trixie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trixie.prototype.setCanScratch = function (canScratch) {
        this.canScratch = canScratch;
    };
    Trixie.prototype.getCanScratch = function () {
        return this.canScratch;
    };
    return Trixie;
}(Cat));
var trixieCat = new Cat('Trixie');
console.log(trixieCat);
//# sourceMappingURL=classes.js.map