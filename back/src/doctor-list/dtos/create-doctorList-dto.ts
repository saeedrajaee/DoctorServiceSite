import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDoctorListDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  category: string;
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  yearsOfExprience: number;
  @IsNotEmpty()
  @IsString()
  address: string;
}
