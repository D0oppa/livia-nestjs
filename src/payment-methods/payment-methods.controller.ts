import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  @Post()
  async createPaymentMethod(@Body() dto: CreatePaymentMethodDto) {
    return this.paymentMethodsService.create(dto);
  }

  @Get()
  async findAllPaymentMethods() {
    return this.paymentMethodsService.findAll();
  }

  @Get(':id')
  async findPaymentMethodById(@Param('id') id: number) {
    return this.paymentMethodsService.findOne(id);
  }

  @Patch(':id')
  async updatePaymentMethod(
    @Param('id') id: number,
    @Body() dto: UpdatePaymentMethodDto,
  ) {
    return this.paymentMethodsService.update(id, dto);
  }

  @Patch('soft-delete/:id')
  async softDeletePaymentMethod(@Param('id') id: number) {
    return this.paymentMethodsService.softDelete(id);
  }

  @Delete(':id')
  async deletePaymentMethod(@Param('id') id: number) {
    return this.paymentMethodsService.delete(id);
  }
}
