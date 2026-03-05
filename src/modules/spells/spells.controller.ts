import { Controller, Get } from '@nestjs/common';
import { SpellsService } from './spells.service';
import { SpellDto } from './dto/spell.dto';

@Controller('spells')
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @Get()
  findAll(): Promise<SpellDto[]> {
    return this.spellsService.findAll();
  }
}
