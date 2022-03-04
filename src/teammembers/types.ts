export type TeamMember = {
    id: number;
    UserId: number;
    BlogId: number;
}

export type NewTeamMember = {
    UserId: number;
    BlogId: number;
}
export type UpdateTeamMember = {
    UserId?: number;
    BlogId?: number;
}