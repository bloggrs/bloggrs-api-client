export type PostLike = {
    id: number;
    UserId: number;
    PostId: number;
}


export type NewPostLike = {
    UserId: number;
    PostId: number;
}

export type UpdatePostLike = {
    UserId?: number;
    PostId?: number;
}