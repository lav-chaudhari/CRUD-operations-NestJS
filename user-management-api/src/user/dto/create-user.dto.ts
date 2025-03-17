// src/users/dto/create-user.dto.ts
import { IsString, IsEmail, IsNotEmpty, IsMobilePhone, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsOptional() // Optionally, clients can provide an ID when creating the user
  @IsString()
  id?: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsMobilePhone()
  @IsNotEmpty()
  mobile: string;
}
