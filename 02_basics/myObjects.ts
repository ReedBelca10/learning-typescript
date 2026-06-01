const user = {
    name: "John",
    email: "john@example.com",
    isActive: true
}

function createUser({ name, isPaid }: { name: string, isPaid: boolean }) { }
createUser({ name: "John", isPaid: true });

type User = {
    readonly _id: string, //readonly means that the property cannot be changed after it is set
    name: string,
    email: string,
    isActive: boolean
    creditCardDetails?: number //optional property
}

function createUser2(user: User) { }

let myUser: User = {
    _id: "1234",
    name: "Reed",
    email: "reed@reed.io",
    isActive: true
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export { }