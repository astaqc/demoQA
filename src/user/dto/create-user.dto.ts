import { IsString, IsEmail, IsNumber } from "class-validator";

export class CreateUserDto {

    @IsNumber()
    userId: number;

    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
