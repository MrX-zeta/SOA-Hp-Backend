import { CharacterDto } from '../../characters/dto/character.dto';
import { HouseMemberDto } from '../../houses/dto/house-member.dto';

export class CharacterHouseDto {
  character: CharacterDto;

  house: string;

  houseMembers: HouseMemberDto[];

  totalMembers: number;
}
