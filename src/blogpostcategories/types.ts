export type BlogPostCategory = {
    BlogId: number;
    CategoryId: number;
}


export type NewBlogPostCategory = {
    BlogId: number;
    CategoryId: number;
}

export type UpdateBlogPostCategory = {
    BlogId?: number;
    CategoryId?: number;
}