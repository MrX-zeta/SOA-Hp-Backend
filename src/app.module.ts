import { Module } from '@nestjs/common';
import { HpApiModule } from './integration/hp-api/hp-api.module';
import { CharactersModule } from './modules/characters/characters.module';
import { StudentsModule } from './modules/students/students.module';
import { StaffModule } from './modules/staff/staff.module';
import { HousesModule } from './modules/houses/houses.module';
import { SpellsModule } from './modules/spells/spells.module';
import { CharacterHouseModule } from './modules/character-house/character-house.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    // Capa de integración (Facade) — se importa primero
    HpApiModule,

    // Módulos de servicio SOA
    CharactersModule,
    StudentsModule,
    StaffModule,
    HousesModule,
    SpellsModule,

    CharacterHouseModule,

    // Servicio de infraestructura
    HealthModule,
  ],
})
export class AppModule {}
