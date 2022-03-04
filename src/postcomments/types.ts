export type PostComment = {
    id: number;
    content: string;
    PostId: number;
}


export type NewPostComment = {
    content: string;
    PostId: number;
}

export type UpdatePostComment = {
    content?: string;
    PostId?: number;
}