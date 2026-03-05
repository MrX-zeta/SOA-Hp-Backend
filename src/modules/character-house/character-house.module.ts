import { Module } from '@nestjs/common';
import { CharacterHouseController } from './character-house.controller';
import { CharacterHouseService } from './character-house.service';
import { CharactersModule } from '../characters/characters.module';
import { HousesModule } from '../houses/houses.module';

@Module({
  imports: [CharactersModule, HousesModule],
  controllers: [CharacterHouseController],
  providers: [CharacterHouseService],
})
export class CharacterHouseModule {}
