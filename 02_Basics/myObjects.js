"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Ayush",
    email: "ayushkum012@gmail.com",
    isActive: true
};
// passing an object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Ayush", isPaid: false });
// return a object
function createCourse() {
    return { name: "Reactjs", price: 399 };
}
var newUser = { name: "ayush", isPaid: true, email: "a@a.com" };
createUser(newUser); // bad behavior of object
function createUser2(user) {
    // return {name:"", email:"", isActive:true}
    return user;
}
createUser2({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "h",
    email: "a@a.com",
    isActive: false
};
myUser.email = "ayush@gmail.com"; //allowed
