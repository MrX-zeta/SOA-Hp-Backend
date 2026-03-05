import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDto } from './dto/student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll(): Promise<StudentDto[]> {
    return this.studentsService.findAll();
  }
}
