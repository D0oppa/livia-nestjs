import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DoctorsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
