const user = {
    name: "John",
    email: "john@example.com",
    isActive: true
}

function createUser({ name, isPaid }: { name: string, isPaid: boolean }) { }
createUser({ name: "John", isPaid: true });

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
}

function createUser2(user: User) { }

let myUser: User = {
    _id: "1234",
    name: "Reed",
    email: "reed@reed.io",
    isActive: true
}


export { }