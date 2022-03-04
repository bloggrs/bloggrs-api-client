export type BlogContact = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    content: string;
    BlogId: number;
}

export type NewBlogContact = {
    first_name: string;
    last_name: string;
    email: string;
    content: string;
    BlogId: number;
}

export type UpdateBlogContact = {
    first_name?: string;
    last_name?: string;
    email?: string;
    content?: string;
    BlogId?: number;
}