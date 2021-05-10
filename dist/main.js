var username = 'yuliya';
var user = null;
// USING TYPESCRIPT WITH DOM ELEMENTS
// When dealing with HTML elements in typescript, it doesn't know how to deal with the markup, TS simply skips it
// That's why we need to specify the exact types of elements we're dealing with
// Element is the highest class in the hierarchy
var profileCard = document.querySelector('.main');
// this will throw an error that property value does not exist on Element
//console.log('profile card', profileCard.value)
// to fix the issue, said element needs to be converted into a more specific type like this
var htmlElement = document.querySelector('.profile');
// and now that TypeScript knows what exact kind of element it's dealing with
// we have access to all html element properties
console.log('new html element', htmlElement.value);
// EVENT LISTENERS
var listenToMe = document.querySelector('.listen-to-me');
// in this case event is also ageneric super class, just like html element
listenToMe.addEventListener('blur', function (event) {
    // event.target.value will not be accessible at this point, as event class is generic
    // ow that we specify correct type of the element we're dealing with, target is accesible
    var target = event.target;
    console.log("event's target", target);
});
//# sourceMappingURL=main.js.map