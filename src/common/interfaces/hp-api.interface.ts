export interface HpApiCharacter {
  id: string;
  name: string;
  alternateNames: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternateActors: string[];
  alive: boolean;
  image: string;
}

export interface HpApiSpell {
  id: string;
  name: string;
  description: string;
}
