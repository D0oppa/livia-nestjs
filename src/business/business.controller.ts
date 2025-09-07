import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Controller('businesses')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  async createBusiness(@Body() dto: CreateBusinessDto) {
    return this.businessService.create(dto);
  }

  @Get()
  async findAllBusinesses() {
    return this.businessService.findAll();
  }

  @Get(':id')
  async findBusinessById(@Param('id') id: number) {
    return this.businessService.findOne(id);
  }

  @Patch(':id')
  async updateBusiness(
    @Param('id') id: number,
    @Body() dto: UpdateBusinessDto,
  ) {
    return this.businessService.update(id, dto);
  }

  @Patch('soft-delete/:id')
  async softDeleteBusiness(@Param('id') id: number) {
    return this.businessService.softDelete(id);
  }

  @Delete(':id')
  async deleteBusiness(@Param('id') id: number) {
    return this.businessService.delete(id);
  }
}
