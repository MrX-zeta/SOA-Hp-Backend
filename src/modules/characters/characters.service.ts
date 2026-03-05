import { Injectable, NotFoundException } from '@nestjs/common';
import { HpApiService } from '../../integration/hp-api/hp-api.service';
import { CharacterDto } from './dto/character.dto';
import { HpApiCharacter } from '../../common/interfaces/hp-api.interface';

/**
 * CharactersService — Servicio SOA de personajes.
 * Responsabilidad: obtener y transformar personajes al contrato CharacterDto.
 * No conoce la HP API directamente; delega en HpApiService (Facade).
 */
@Injectable()
export class CharactersService {
  constructor(private readonly hpApiService: HpApiService) {}

  async findAll(): Promise<CharacterDto[]> {
    const raw = await this.hpApiService.getAllCharacters();
    return raw.map(this.toDto);
  }

  async findById(id: string): Promise<CharacterDto> {
    const raw = await this.hpApiService.getAllCharacters();
    const character = raw.find((c) => c.id === id);

    if (!character) {
      throw new NotFoundException(`Personaje con id "${id}" no encontrado.`);
    }

    return this.toDto(character);
  }

  // ── Mapper: HpApiCharacter → CharacterDto ─────────────────────────────
  toDto(raw: HpApiCharacter): CharacterDto {
    return {
      id:              raw.id,
      name:            raw.name,
      species:         raw.species,
      gender:          raw.gender,
      house:           raw.house,
      dateOfBirth:     raw.dateOfBirth,
      wizard:          raw.wizard,
      ancestry:        raw.ancestry,
      patronus:        raw.patronus,
      hogwartsStudent: raw.hogwartsStudent,
      hogwartsStaff:   raw.hogwartsStaff,
      alive:           raw.alive,
      image:           raw.image,
    };
  }
}
