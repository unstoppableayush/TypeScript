let greetings:string = "Hello World";

// greetings = 6  // cannot assign - typesafety
console.log(greetings);

greetings.toLowerCase()

//number
let userId:number = 33322.4

//boolean
let isLoggedIn:boolean = false

//any - Any is not a type , it means it ignores the type check

let hero:string;

function getHero(){
    return "Thor"
}

hero = getHero() 

export {}