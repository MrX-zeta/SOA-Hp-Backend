import { Controller, Get, Param } from '@nestjs/common';
import { HousesService, HouseName } from './houses.service';
import { HouseMemberDto } from './dto/house-member.dto';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Get(':house')
  findByHouse(@Param('house') house: HouseName): Promise<HouseMemberDto[]> {
    return this.housesService.findByHouse(house);
  }
}
