export default interface User {
    _id: string,
    username: string,
    emailAddress: string,
    encryptedPassword: string,
    isDisabled: boolean,
    roles: UserRoles[],
}

export enum UserRoles {
    user = "user",
    admin = "admin",
}