// const user: string[] = ["hc"]
const user: (string | number)[]= ["hc"]

let tUser: [string, number, boolean]
tUser = ["hc", 131, true]

// tUser = [true, 123, "fg"] // not used -> order of tuple matters

let rgb:[number, number, number] = [255, 123, 112]

type User = [number , string]

const newUser:User = [112, 'ayush@google.com']

newUser[1] = "ayush@gmail.com"
// newUser.push(true)