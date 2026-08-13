import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateLeadDto {
  @IsString({
    message: 'El campo name debe ser un string',
  })
  @IsNotEmpty({
    message: 'El campo name debe ser un string'
  })
  name: string;

  @IsEmail({}, {
    message: 'El email es invalido'
  })
  email: string;

  @IsString({
    message: 'El campo name debe ser un string'
  })
  company: string;

  @IsNotEmpty({
    message: 'El campo name debe ser un string'
  })
  message: string;
}
