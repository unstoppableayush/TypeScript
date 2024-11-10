abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    abstract getSepia(): void
    getReelTime(): number{
        return 8
    }
}

// const ayushi = new TakePhoto(
//     "test",
//     "Test"
// )  // object can't be created

class Insta extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia")
    }
}

const ayu = new Insta("test", "Test", 3)