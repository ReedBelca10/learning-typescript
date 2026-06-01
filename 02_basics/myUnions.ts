let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string;
    email: string;
}

type Admin = {
    username: string;
    email: string;
    isAdmin: boolean;
}

let user: User | Admin = {
    name: "John",
    email: "john@example.com"
}

user = {
    username: "John",
    email: "john@example.com",
    isAdmin: true
}

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    } else {
        id + 2
    }
    console.log(`DB id is: ${id}`)
}

//Array
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = ["1", "2", "3", 4, 5, 6]

export { }