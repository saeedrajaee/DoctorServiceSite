import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorListDto } from './dtos/create-doctorList-dto';
import { UpdateDoctorListDto } from './dtos/update-doctorList-dto';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class DoctorListService {
  constructor(private readonly prismaService: PrismaService) {}

  async createDoctorList(data: CreateDoctorListDto) {
    return this.prismaService.doctorList.create({
      data: {
        ...data,
        // userId,
      },
    });
  }

  async getLibrarys() {
    const images = await this.prismaService.doctorList.findMany();
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
        join(__dirname, '../../', `public/images/doctorList/${Id}.jpg`),
        fs.constants.F_OK,
      );
      return true;
    } catch (err) {
      return false;
    }
  }

  async getDoctorLists() {
    const datas = await this.prismaService.doctorList.findMany();
    return Promise.all(
      datas.map(async (data) => ({
        ...data,
      })),
    );
  }

  async getDoctorList(doctorListsId: number) {
    try {
      return {
        ...(await this.prismaService.doctorList.findUniqueOrThrow({
          where: { id: doctorListsId },
        })),
      };
    } catch (err) {
      throw new NotFoundException(`Flow not found with ID ${doctorListsId}`);
    }
  }

  async updateDoctorList(id: number, data: UpdateDoctorListDto) {
    try {
      return this.prismaService.doctorList.update({
        where: { id },
        data: {
          name: data.name,
        },
      });
      await fs.unlink(
        join(__dirname, '../../', `public/images/doctorList/${id}.jpg`),
      );
    } catch (err) {
      return false;
    }
  }

  async deleteDoctorList(id: number) {
    try {
      await fs.unlink(
        join(__dirname, '../../', `public/images/doctorList/${id}.jpg`),
      );
      return this.prismaService.doctorList.delete({
        where: { id },
      });
    } catch (err) {
      return false;
    }
  }
}
