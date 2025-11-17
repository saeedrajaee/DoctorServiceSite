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
import { CreateDoctorListDto } from './dtos/create-doctorList-dto';
import { UpdateDoctorListDto } from './dtos/update-doctorList-dto';
import { DoctorListService } from './doctor-list.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PRODUCT_IMAGES } from './product-images';

@Controller('doctor-list')
export class DoctorListController {
  constructor(private readonly doctorListService: DoctorListService) {}

  @Post()
  async createDoctorList(
    @Body() body: CreateDoctorListDto,
    // @CurrentUser() user: TokenPayload,
  ) {
    console.log("teeeeeeeeeeeeeeeeeeeeeeeeest",body)
    return this.doctorListService.createDoctorList(body);
  }

  @Get()
  async getDoctorLists() {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.doctorListService.getDoctorLists();
  }

  @Post(':Id/file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: PRODUCT_IMAGES,
        filename: (req, file, callback) => {
          // const uniqueSuffix = Date.now() + '-' + Math.random() * 1e9;
          // console.log("req.params.Id......",req)
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

  @Get(':doctorListId')
  async getDoctorList(@Param('doctorListId') doctorListId: string) {
    return this.doctorListService.getDoctorList(+doctorListId);
  }

  @Patch(':doctorListId')
  async updateDoctorList(
    @Param('doctorListId') doctorListId: string,
    @Body() updateDoctorListDto: UpdateDoctorListDto,
  ) {
    return this.doctorListService.updateDoctorList(
      +doctorListId,
      updateDoctorListDto,
    );
  }

  @Delete(':doctorListId')
  async deleteDoctorList(@Param('doctorListId') doctorListId: string) {
    return this.doctorListService.deleteDoctorList(+doctorListId);
  }
}
