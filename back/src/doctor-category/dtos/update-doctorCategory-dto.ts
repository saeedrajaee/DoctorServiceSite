import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorCategoryDto } from './create-doctorCategory-dto';

export class UpdateDoctorCategoryDto extends PartialType(
  CreateDoctorCategoryDto,
) {}
