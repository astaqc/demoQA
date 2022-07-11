import { IsString, IsEmail, IsNumber, IsOptional } from "class-validator";

export class CreateUserDto {

    @IsNumber()
    @IsOptional()
    userId: number;

    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
