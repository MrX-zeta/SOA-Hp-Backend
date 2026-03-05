import { Injectable, BadRequestException } from '@nestjs/common';
import { CharactersService } from '../characters/characters.service';
import { HousesService, HouseName } from '../houses/houses.service';
import { CharacterHouseDto } from './dto/character-house.dto';

@Injectable()
export class CharacterHouseService {
  constructor(
    private readonly charactersService: CharactersService,
    private readonly housesService: HousesService,
  ) {}

  async findCharacterWithHouseMembers(id: string): Promise<CharacterHouseDto> {
    //  Obtiene el personaje
    const character = await this.charactersService.findById(id);

    if (!character.house) {
      throw new BadRequestException(
        `El personaje "${character.name}" no pertenece a ninguna casa de Hogwarts.`,
      );
    }

    // Obtener miembros de su casa
    const houseMembers = await this.housesService.findByHouse(
      character.house.toLowerCase() as HouseName,
    );

    return {
      character,
      house:        character.house,
      houseMembers: houseMembers.filter((m) => m.id !== character.id),
      totalMembers: houseMembers.length,
    };
  }
}
