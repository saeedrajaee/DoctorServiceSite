import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DoctorCategoryModule } from './doctor-category/doctor-category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DoctorCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
