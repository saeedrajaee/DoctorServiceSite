import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDoctorCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
