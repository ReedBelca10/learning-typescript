"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNumbers(num) {
    return num + 2;
}
console.log(addTwoNumbers(5));
function signUpUser(name, email, isPaid) {
    return name + email + isPaid;
}
signUpUser("John", "[EMAIL_ADDRESS]", true);
var signInUser = function (name, email, isPaid) {
    if (isPaid) {
        return name + email + isPaid;
    }
    return name + email;
};
signInUser("John", "[EMAIL_ADDRESS]", true);
var getHello = function (s) {
    return "Hello " + s;
};
console.log(getHello("John"));
