import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  specialty: string;

  @IsNumber()
  @IsOptional()
  negocio_id: number;
}
