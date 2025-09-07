import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Injectable()
export class BusinessService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBusinessDto) {
    const existingBusiness = await this.prisma.business.findFirst({
      where: {
        OR: [{ name: data.name }, { address: data.address }],
        deleted_at: null,
      },
    });

    if (existingBusiness) {
      throw new BadRequestException(
        'A business with the same name or address already exists',
      );
    }

    const newBusiness = await this.prisma.business.create({ data });
    return newBusiness;
  }

  async findAll() {
    return this.prisma.business.findMany({
      where: { deleted_at: null },
    });
  }

  async findOne(id: number) {
    const business = await this.prisma.business.findFirst({
      where: { id, deleted_at: null },
    });

    if (!business) {
      throw new NotFoundException(`Business with ID ${id} not found`);
    }

    return business;
  }

  async update(id: number, data: UpdateBusinessDto) {
    await this.findOne(id);

    return this.prisma.business.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);

    return this.prisma.business.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }

  async delete(id: number) {
    await this.findOne(id);

    return this.prisma.business.delete({
      where: { id },
    });
  }
}
