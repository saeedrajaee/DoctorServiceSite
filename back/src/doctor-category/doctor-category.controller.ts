import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Get,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CreateDoctorCategoryDto } from './dtos/create-doctorCategory-dto';
import { UpdateDoctorCategoryDto } from './dtos/update-doctorCategory-dto';
import { DoctorCategoryService } from './doctor-category.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PRODUCT_IMAGES } from './doctorCategory-images';

@Controller('doctor-category')
export class DoctorCategoryController {
  constructor(private readonly doctorCategoryService: DoctorCategoryService) {}

  @Post()
  async createDoctorCategory(
    @Body() body: CreateDoctorCategoryDto,
    // @CurrentUser() user: TokenPayload,
  ) {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.doctorCategoryService.createDoctorCategory(body);
  }

  @Get()
  async getDoctorCategorys() {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.doctorCategoryService.getDoctorCategorys();
  }

  @Post(':Id/file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: PRODUCT_IMAGES,
        filename: (req, file, callback) => {
          // const uniqueSuffix = Date.now() + '-' + Math.random() * 1e9;
          callback(null, `${req.params.Id}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      originlname: file.originalname,
      filename: file.filename,
    };
  }

  @Get(':doctorCategoryId')
  async getDoctorCategory(@Param('doctorCategoryId') doctorCategoryId: string) {
    return this.doctorCategoryService.getDoctorCategory(+doctorCategoryId);
  }

  @Patch(':doctorCategoryId')
  async updateDoctorCategory(
    @Param('doctorCategoryId') doctorCategoryId: string,
    @Body() updateDoctorCategoryDto: UpdateDoctorCategoryDto,
  ) {
    return this.doctorCategoryService.updateDoctorCategory(
      +doctorCategoryId,
      updateDoctorCategoryDto,
    );
  }

  @Delete(':doctorCategoryId')
  async deleteDoctorCategory(
    @Param('doctorCategoryId') doctorCategoryId: string,
  ) {
    return this.doctorCategoryService.deleteDoctorCategory(+doctorCategoryId);
  }
}
