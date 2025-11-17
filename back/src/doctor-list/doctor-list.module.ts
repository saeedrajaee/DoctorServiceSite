import { Module } from '@nestjs/common';
import { DoctorListController } from './doctor-list.controller';
import { DoctorListService } from './doctor-list.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DoctorListController],
  providers: [DoctorListService],
})
export class DoctorListModule {}
