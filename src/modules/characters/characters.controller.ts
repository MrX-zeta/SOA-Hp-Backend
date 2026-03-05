import { Controller, Get, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharacterDto } from './dto/character.dto';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  findAll(): Promise<CharacterDto[]> {
    return this.charactersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<CharacterDto> {
    return this.charactersService.findById(id);
  }
}
