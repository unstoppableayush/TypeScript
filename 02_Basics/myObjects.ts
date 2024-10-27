const User = {
    name: "Ayush",
    email: "ayushkum012@gmail.com",
    isActive: true
}

// passing an object
function createUser({name:string, isPaid:boolean}){}
createUser({name:"Ayush",isPaid:false})


// return a object
function createCourse():({name:string, price:number}){
    return {name:"Reactjs",price:399}
}

let newUser = {name:"ayush",isPaid:true,email:"a@a.com"}
createUser(newUser) // bad behavior of object

// Type Aliases
type User = {
    name:string,
    email:string,
    isActive:boolean
}

type Mystring = string

function createUser2(user:User):User{ //passing and returing User Type object
    // return {name:"", email:"", isActive:true}
    return user
}
createUser2({name:"",email:"",isActive:true})

// READONLY and optional

type User1 = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number
}

let myUser:User1 = {
    _id:"1234",
    name:"h",
    email:"a@a.com",
    isActive: false
}

myUser.email = "ayush@gmail.com" //allowed
// myUser._id = "456" //not allowed
// if _id will be array then we can push the value

export {}
