import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorCategoryDto } from './dtos/create-doctorCategory-dto';
import { UpdateDoctorCategoryDto } from './dtos/update-doctorCategory-dto';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class DoctorCategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async createDoctorCategory(data: CreateDoctorCategoryDto) {
    return this.prismaService.doctorCategory.create({
      data: {
        ...data,
        // userId,
      },
    });
  }

  async getLibrarys() {
    const images = await this.prismaService.doctorCategory.findMany();
    return Promise.all(
      images.map(async (image) => ({
        ...image,
        imageExists: await this.imageExists(image.id),
      })),
    );
  }

  private async imageExists(Id: number) {
    try {
      const address = await fs.access(
        join(__dirname, '../..', `uploadsFile/${Id}.jpg`),
        fs.constants.F_OK,
      );
      return true;
    } catch (err) {
      return false;
    }
  }

  async getDoctorCategorys() {
    const datas = await this.prismaService.doctorCategory.findMany();
    return Promise.all(
      datas.map(async (data) => ({
        ...data,
      })),
    );
  }

  async getDoctorCategory(doctorCategoryId: number) {
    try {
      return {
        ...(await this.prismaService.doctorCategory.findUniqueOrThrow({
          where: { id: doctorCategoryId },
        })),
      };
    } catch (err) {
      throw new NotFoundException(
        `Flow not found with ID ${doctorCategoryId}`,
      );
    }
  }

  async updateDoctorCategory(id: number, data: UpdateDoctorCategoryDto) {
    return this.prismaService.doctorCategory.update({
      where: { id },
      data: {
        name: data.name,
      },
    });
  }

  async deleteDoctorCategory(id: number) {
    return this.prismaService.doctorCategory.delete({
      where: { id },
    });
  }
}
