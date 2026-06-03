const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number | string): number | string {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(3);

function identityFour<T>(val: T): T {
    return val;
}

interface Bootle {
    name: string;
    size: number;
}

// identityFour<Bootle>({name: "", size: 0})


// Génériques pour les tableaux
function getSearchProducts<T>(products: T[]): T | undefined {
    // Quelques opérations dans la BD
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T,>(products: T[]): T | undefined => {
    // Quelques opérations dans la BD
    const myIndex = 3;
    return products[myIndex];
}

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, "hello");

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    type: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = [];
    
    addToCart(product: T) {
        this.cart.push(product);
    }
}