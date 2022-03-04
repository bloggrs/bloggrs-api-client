export type Blog = {
    id: number;
    name: string;
    description?: string;
    logo_url: string;
    slug?: string;
    BlogCategoryId: string;
    craftjs_json_state: string;
}


export type NewBlog = {
    name: string;
    description?: string;
    logo_url: string;
    slug?: string;
    BlogCategoryId: string;
    craftjs_json_state: string;
}

export type UpdateBlog = {
    name?: string;
    description?: string;
    logo_url?: string;
    slug?: string;
    BlogCategoryId?: string;
    craftjs_json_state?: string;
}