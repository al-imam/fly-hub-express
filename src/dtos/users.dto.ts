import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UserPasswordDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  public password: string;
}

export class SingInUserDto extends UserPasswordDto {
  @IsNotEmpty()
  @IsEmail()
  public email: string;
}

export class CreateUserDto extends SingInUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  public name: string;
}

export class UpdatePasswordDto extends UserPasswordDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  public "current-password": string;
}
