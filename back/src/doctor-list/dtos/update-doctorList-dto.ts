import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorListDto } from './create-doctorList-dto';

export class UpdateDoctorListDto extends PartialType(CreateDoctorListDto) {}
