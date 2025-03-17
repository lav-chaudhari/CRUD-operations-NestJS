// src/users/dto/update-user.dto.ts
import { IsString, IsEmail, IsOptional, IsMobilePhone, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsNumber()
  id?: number;  // Optional, used for identifying the user

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsMobilePhone()
  mobile?: string;
}
