import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorService: DoctorsService) {}

  @Post()
  async createDoctor(@Body() dto: CreateDoctorDto) {
    return this.doctorService.create(dto);
  }

  @Get()
  async findAllDoctors() {
    return this.doctorService.findAll();
  }
  @Get(':id')
  async findDoctorById(@Param('id') id: number) {
    return this.doctorService.findOne(id);
  }

  @Patch(':id')
  async updateDoctor(@Param('id') id: number, @Body() dto: UpdateDoctorDto) {
    return this.doctorService.update(id, dto);
  }

  @Delete(':id')
  async deleteDoctor(@Param('id') id: number) {
    return this.doctorService.deleteDoctor(id);
  }
}
