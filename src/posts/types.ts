export type Post = {
    id: number;
    title: string;
    slug: string;
    html_content: string;
    BlogId: number;
}

export type NewPost = {
    title: string;
    slug: string;
    html_content: string;
    BlogId: number}

export type UpdatePost = {
    title?: string;
    slug?: string;
    html_content?: string;
    BlogId?: number;
}