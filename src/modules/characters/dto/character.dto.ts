/**
 * CharacterDto — Contrato formal del servicio de personajes.
 * Este es el único formato que el consumidor (Next.js) debe conocer.
 * Los campos internos de la HP API que no son relevantes se omiten aquí.
 */
export class CharacterDto {
  id: string;

  name: string;

  species: string;

  gender: string;

  house: string;

  dateOfBirth: string | null;

  wizard: boolean;

  ancestry: string;

  patronus: string;

  hogwartsStudent: boolean;

  hogwartsStaff: boolean;

  alive: boolean;

  image: string;
}
