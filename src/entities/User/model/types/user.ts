export interface User {
    id: string;
    email: string;
}

export interface UserSchema {
    authData?: User;
}
