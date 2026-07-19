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