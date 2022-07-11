
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Create_User {
    userId?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface Update_User {
    userId?: Nullable<number>;
    name: string;
    email: string;
    password: string;
}

export interface Token {
    access_token?: Nullable<string>;
}

export interface IMutation {
    login(email?: Nullable<string>, password?: Nullable<string>): Nullable<Token> | Promise<Nullable<Token>>;
    createUser(create?: Nullable<Create_User>): Nullable<User>[] | Promise<Nullable<User>[]>;
    updateUser(update?: Nullable<Update_User>): User | Promise<User>;
}

export interface User {
    userId?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface IQuery {
    user(): Nullable<User>[] | Promise<Nullable<User>[]>;
    userById(id?: Nullable<number>): User | Promise<User>;
    delete(id?: Nullable<number>): string | Promise<string>;
}

type Nullable<T> = T | null;
