import { Controller, Get } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffDto } from './dto/staff.dto';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  findAll(): Promise<StaffDto[]> {
    return this.staffService.findAll();
  }
}
