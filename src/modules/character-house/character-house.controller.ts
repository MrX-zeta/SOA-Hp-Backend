import { Controller, Get, Param } from '@nestjs/common';
import { CharacterHouseService } from './character-house.service';
import { CharacterHouseDto } from './dto/character-house.dto';

@Controller('characters')
export class CharacterHouseController {
  constructor(private readonly characterHouseService: CharacterHouseService) {}

  @Get(':id/house-members')
  findCharacterWithHouseMembers(@Param('id') id: string): Promise<CharacterHouseDto> {
    return this.characterHouseService.findCharacterWithHouseMembers(id);
  }
}
