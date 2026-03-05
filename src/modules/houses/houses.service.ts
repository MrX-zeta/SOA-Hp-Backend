import { Injectable } from '@nestjs/common';
import { HpApiService } from '../../integration/hp-api/hp-api.service';
import { HouseMemberDto } from './dto/house-member.dto';

export type HouseName = 'gryffindor' | 'slytherin' | 'hufflepuff' | 'ravenclaw';

@Injectable()
export class HousesService {
  constructor(private readonly hpApiService: HpApiService) {}

  async findByHouse(house: HouseName): Promise<HouseMemberDto[]> {
    const raw = await this.hpApiService.getCharactersByHouse(house);
    return raw.map((c) => ({
      id:          c.id,
      name:        c.name,
      dateOfBirth: c.dateOfBirth,
      alive:       c.alive,
      image:       c.image,
    }));
  }
}
