interface User {
    name: string;
    email: string;
    isActive: boolean;
    readonly _id: string;
    startTrial: () => string;
    getCoupon: (name: string, off: number) => number;
}

interface User {
    githubToken: string;
    googleId?: string;
}

interface Admin extends User {
    role: "admin" | "user";
}

const reedBelca: Admin = {
    name: "ReedBelca",
    email: "rb@rb.com",
    isActive: true,
    _id: "1144",
    githubToken: "githubToken",
    startTrial: () => {
        return "Trial started";
    },
    getCoupon(name: string, off: number) {
        return off;
    },
    role: "admin"
}

export { }