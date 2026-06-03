abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

    abstract createStory(): void;
    getReelTime(): number {
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter, burst);
    }

    createStory(): void {
        console.log("Story created");
    }
}

const reed = new Instagram("selfie", "normal", 1);
reed.getReelTime();
