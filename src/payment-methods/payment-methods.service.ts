import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@Injectable()
export class PaymentMethodsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePaymentMethodDto) {
    const existingMethod = await this.prisma.payment_method.findFirst({
      where: { type: data.type, deleted_at: null },
    });

    if (existingMethod) {
      throw new ConflictException(
        `Payment method with type ${data.type} already exists`,
      );
    }

    return this.prisma.payment_method.create({ data });
  }

  async findAll() {
    return this.prisma.payment_method.findMany({
      where: { deleted_at: null },
    });
  }

  async findOne(id: number) {
    const paymentMethod = await this.prisma.payment_method.findFirst({
      where: { id, deleted_at: null },
    });

    if (!paymentMethod) {
      throw new NotFoundException(`Payment method with ID ${id} not found`);
    }

    return paymentMethod;
  }

  async update(id: number, data: UpdatePaymentMethodDto) {
    await this.findOne(id);

    return this.prisma.payment_method.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: number) {
    await this.findOne(id);

    return this.prisma.payment_method.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }

  async delete(id: number) {
    await this.findOne(id);

    return this.prisma.payment_method.delete({
      where: { id },
    });
  }
}
