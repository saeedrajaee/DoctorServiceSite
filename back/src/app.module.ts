import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DoctorCategoryModule } from './doctor-category/doctor-category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DoctorListModule } from './doctor-list/doctor-list.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/images'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DoctorCategoryModule,
    DoctorListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
