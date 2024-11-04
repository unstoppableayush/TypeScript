let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string;
    id:number;
}

type Admin = {
    username: string;
    id: number;
}

//ayush can be a normal user type as well admin type
let ayush:User | Admin = {name:"ayush", id:334}
ayush = { username:'admin_ayush', id:334}

function getDbId(id: number | string){
    //making some API calls
    console.log(`DB is is: ${id}`)

    if(typeof id == "string"){
        id.toLowerCase()
    }
}

getDbId(3)
getDbId("3")

//array

const data:number[] = [1, 2, 3]
const data2:string[] = ["1", "2", "3"]
const data3:string[] | number[] = ["1", "2", "3"] //either all numbers or string
const data4:(string | number | boolean)[] = ["1", "2", 3, true] //either all numbers or string

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"
