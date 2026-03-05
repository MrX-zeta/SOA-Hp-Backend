import { Injectable } from '@nestjs/common';
import { HpApiService } from '../../integration/hp-api/hp-api.service';
import { StaffDto } from './dto/staff.dto';

@Injectable()
export class StaffService {
  constructor(private readonly hpApiService: HpApiService) {}

  async findAll(): Promise<StaffDto[]> {
    const raw = await this.hpApiService.getStaff();
    return raw.map((c) => ({
      id:      c.id,
      name:    c.name,
      species: c.species,
      house:   c.house,
      alive:   c.alive,
      image:   c.image,
    }));
  }
}
