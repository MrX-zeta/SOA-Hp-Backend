import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService],
  exports: [CharactersService], // Exportado para uso en CharacterHouseModule
})
export class CharactersModule {}
