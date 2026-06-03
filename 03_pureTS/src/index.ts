class User {

    readonly city: string="Lomé";
    protected _id = "128dsgeRY";

    constructor(
        public name: string, 
        public email:string, 
        public isActive: boolean
    ){}
    
    get getAppleEmail(): string {
        return `${this.name} ${this.email}`
    }

    get id(): string {
        return this._id;
    }

    set id(newId) {
        if (newId !== this._id)
            throw new Error("Id cannot be changed");
        this._id = newId;
    }
}

const reed = new User("Reed", "reed@reed.com", true); 
//reed.city = "Paris";

class subUser extends User {
    isFamily: boolean = true;
    changeUserId() {
        this._id = "123";
    }
}