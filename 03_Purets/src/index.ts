class User{
    
    protected _courseCount = 1

    // by default marked as public
    public email: string
    // private name: string
    city: string = ""
    constructor(email:string, name: string){
        this.email = email
        this.name = name
    }

    private deleteToken(){
        console.log("Token deleted")
    }

    getAppleEmail(): string{
        return `apple${this.email}`
    }

    // getter
    get courseCount(): number {
        return this._courseCount
    }

    //setter - no return type
    set courseCount(courseNum){
        if(courseNum <=1 ){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const ayush = new User( "a@a.com",  "Ayush")
ayush.city = "Aurangabad"
// ayush.deleteToken()  //accessiable

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4  //proctected value can be inherited
    }
}