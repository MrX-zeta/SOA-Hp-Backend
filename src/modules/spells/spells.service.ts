import { Injectable } from '@nestjs/common';
import { HpApiService } from '../../integration/hp-api/hp-api.service';
import { SpellDto } from './dto/spell.dto';

@Injectable()
export class SpellsService {
  constructor(private readonly hpApiService: HpApiService) {}

  async findAll(): Promise<SpellDto[]> {
    const raw = await this.hpApiService.getAllSpells();
    return raw.map((s) => ({
      id:          s.id,
      name:        s.name,
      description: s.description,
    }));
  }
}
