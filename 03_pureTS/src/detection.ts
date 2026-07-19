function detectType(value: number | string) {
    if (typeof value === "number") {
        return value.toFixed(2);
    }
    return value.toUpperCase();
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
        else {
            console.log("No strings provided");
        }
    }
}

interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food";
    } else {
        pet
        return "bird food";
    }
}