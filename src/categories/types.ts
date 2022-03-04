export type Category = {
    id: number;
    name: string;
    slug: string;
}


export type NewCategory = {
    name: string;
    slug: string;
}

export type UpdateCategory = {
    name?: string;
    slug?: string;
}