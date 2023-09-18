import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum STATUS {
  UPCOMING = 'upcoming',
  DONE = 'done',
}
export class CreateTaskDto {
  @IsNotEmpty({ message: `Title should not be empty.` })
  @IsString({ message: `Title should not be string.` })
  title: string;

  @IsNotEmpty({ message: `Description should not be empty.` })
  @IsString({ message: `Description should not be string.` })
  description: string;

  @IsNotEmpty({ message: `Date should not be empty.` })
  @IsDateString()
  date: Date;

  @IsNotEmpty({ message: `Status should not be empty.` })
  @IsString({ message: `Status should not be string.` })
  @IsEnum(STATUS)
  status: string;
}
