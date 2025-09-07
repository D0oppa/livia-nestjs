import { Module } from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { PaymentMethodsController } from './payment-methods.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PaymentMethodsService, PrismaService],
  controllers: [PaymentMethodsController],
})
export class PaymentMethodsModule {}
