import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';

@Module({
  imports: [PrismaModule],
  providers: [BusinessService],
  controllers: [BusinessController],
})
export class BusinessModule {}
