enum ReferralType {
    BLOG
}

export type Referral = {
    id: number;
    type: ReferralType;
    BlogId: number;
    UserId: number;
}

export type NewReferral = {
    type: ReferralType;
    BlogId: number;
    UserId: number;
}

export type UpdateReferral = {
    type?: ReferralType;
    BlogId?: number;
    UserId?: number;
}