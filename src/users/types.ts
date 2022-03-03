export type User = {
    id: number;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    isGuest: boolean;
}


export type NewUser = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}