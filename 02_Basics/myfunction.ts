function addTwo(num:number){
    return num + 2
}

addTwo(5)

function getUpper(val:string):string{
    return val.toUpperCase()
}

getUpper("Ayush")

function signUpUser(name:string,email:string, isPaid: boolean){}

let loginUser = (name:string, email:string, isPaid:boolean = false) => //assign default value

signUpUser("Ayush","ayush@gmail.com",true)

// Returning more than one type

// function getValue(myVal: number):string{
//     if(myVal > 5){
//         return true
//     }
//     return "200 Ok"
// }

function getValue(myVal: number): string | boolean {
    if (myVal > 5) {
        return true
    } else {
        return "200 ok";
    }
}

const result = getValue(5);

const heros = ["thor","spiderman","ironman"]

heros.map((hero):string => {
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{ //void - not returning anything
    console.log(errmsg)
}

function handleError(errmsg:string):never{ //never type represents values which are never observed
    throw new Error(errmsg)
}



export {}