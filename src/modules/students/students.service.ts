import { Injectable } from '@nestjs/common';
import { HpApiService } from '../../integration/hp-api/hp-api.service';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly hpApiService: HpApiService) {}

  async findAll(): Promise<StudentDto[]> {
    const raw = await this.hpApiService.getStudents();
    return raw.map((c) => ({
      id:          c.id,
      name:        c.name,
      house:       c.house,
      dateOfBirth: c.dateOfBirth,
      alive:       c.alive,
      patronus:    c.patronus,
      image:       c.image,
    }));
  }
}
