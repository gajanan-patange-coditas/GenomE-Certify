export enum Roles {
    DIPLOMATE = "DIPLOMATE",
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    CANDIDATE = "CANDIDATE",
}



export interface User {
    email: string
    name: string,
    roles: Roles[]
}