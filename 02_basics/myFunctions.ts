function addTwoNumbers(num: number): number {
    return num + 2;
}

 console.log(addTwoNumbers(5));

function signUpUser(name: string, email: string, isPaid: boolean) {
    return name + email + isPaid;
}

signUpUser("John", "[EMAIL_ADDRESS]", true);

var signInUser = (name: string, email: string, isPaid: boolean) => {
    if (isPaid) {
        return name + email + isPaid;
    }
    return name + email;
}

signInUser("John", "[EMAIL_ADDRESS]", true);

const getHello = (s: string): string => {
    return "Hello " + s;
}

console.log(`"Hello ${getHello("John")}"`);

export {}