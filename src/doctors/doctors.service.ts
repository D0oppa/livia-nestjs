import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDoctorDto) {
    const newDoctor = await this.prisma.doctor.create({
      data,
    });

    return newDoctor;
  }

  async findAll() {
    const doctors = await this.prisma.doctor.findMany();
    return doctors;
  }

  async findOne(id: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
    });

    return doctor;
  }

  async update(id: number, data: Partial<CreateDoctorDto>) {
    const existingDoctor = await this.findOne(id);
    if (!existingDoctor) {
      throw new NotFoundException(`Doctor with ID ${id} not found`);
    }

    const updatedDoctor = await this.prisma.doctor.update({
      where: { id },
      data,
    });

    return updatedDoctor;
  }

  async deleteDoctor(id: number) {
    const existingDoctor = await this.findOne(id);
    if (!existingDoctor) {
      throw new NotFoundException(`Doctor with ID ${id} not found`);
    }

    const deletedDoctor = await this.prisma.doctor.delete({
      where: { id },
    });

    return deletedDoctor;
  }
}
