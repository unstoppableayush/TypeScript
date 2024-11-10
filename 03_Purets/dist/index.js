"use strict";
class User {
    constructor(email, name) {
        this._courseCount = 1;
        // private name: string
        this.city = "";
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    getAppleEmail() {
        return `apple${this.email}`;
    }
    // getter
    get courseCount() {
        return this._courseCount;
    }
    //setter - no return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const ayush = new User("a@a.com", "Ayush");
ayush.city = "Aurangabad";
// ayush.deleteToken()  //accessiable
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; //proctected value can be inherited
    }
}
