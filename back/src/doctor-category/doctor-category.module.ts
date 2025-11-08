import { Module } from '@nestjs/common';
import { DoctorCategoryController } from './doctor-category.controller';
import { DoctorCategoryService } from './doctor-category.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DoctorCategoryController],
  providers: [DoctorCategoryService],
})
export class DoctorCategoryModule {}
