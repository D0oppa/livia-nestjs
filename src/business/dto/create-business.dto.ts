import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateBusinessDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  // Regex to match "HH:MM - HH:MM" in 24-hour format
  @Matches(/^(?:[01]\d|2[0-3]):[0-5]\d\s*-\s*(?:[01]\d|2[0-3]):[0-5]\d$/, {
    message: 'hours must be in format HH:MM - HH:MM (24h)',
  })
  hours: string;
}
