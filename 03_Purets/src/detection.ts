
//Type narrowing is a technique that involves narrowing down a general type into a more specific one. It's a crucial method for using variables accurately, especially when their exact types are unclear
//narrowing
function detectType(val: number | string){
    if(typeof val === "string"){
       return  val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}

    
// in operator narrowing
interface User{
    name:string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean,
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account)
        return account.isAdmin
}

// instance of and Type predicates
type Fish = { swim: () => void};
type Bird = { fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }
    else{
        pet
        return "bird Food"
    }
}

// Discriminated unions , never

interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kinf:"sqaure",
    side: number
}

interface Rectangle{
    kind: "reactangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle  

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}

function geArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius **2
        case "sqaure":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}

