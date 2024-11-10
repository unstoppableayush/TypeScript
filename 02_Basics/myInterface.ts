interface User {
    readonly dbId: number,
    email: string;
    userId: number;
    googleId?: string;
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string): number
}

const ayush : User = {
    dbId:22, 
    email: "a@a.com", 
    userId: 2211,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "ayush10") => {
        return 10
    },
    githubToken:"token"
}
ayush.email = "ayush@gmail.com"
// ayush.dbId = 33  //not allowed


// interface vs type 

//reopening of interfcae
interface User{
    githubToken: string
}

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}


const ayuh: Admin = {
    dbId: 23,
    email:"ayuh@gmail.com",
    userId: 222,
    role:"admin",
    githubToken: "github",
    startTrail: ()=> {
         return "trail started"
    },
    getCoupon: (name: "ayush2") => {
        return 10
    }
    
}
