import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { HpApiCharacter, HpApiSpell } from '../../common/interfaces/hp-api.interface';

@Injectable()
export class HpApiService {
  private readonly baseUrl: string;

  constructor(private readonly httpService: HttpService) {
    this.baseUrl = process.env.HP_API_BASE_URL || 'https://hp-api.onrender.com';
  }

  // ── Personajes

  async getAllCharacters(): Promise<HpApiCharacter[]> {
    return this.get<HpApiCharacter[]>('/api/characters');
  }

  async getStudents(): Promise<HpApiCharacter[]> {
    return this.get<HpApiCharacter[]>('/api/characters/students');
  }

  async getStaff(): Promise<HpApiCharacter[]> {
    return this.get<HpApiCharacter[]>('/api/characters/staff');
  }

  async getCharactersByHouse(house: string): Promise<HpApiCharacter[]> {
    return this.get<HpApiCharacter[]>(`/api/characters/house/${house}`);
  }

  // ── Hechizos

  async getAllSpells(): Promise<HpApiSpell[]> {
    return this.get<HpApiSpell[]>('/api/spells');
  }

  // ── Helper privado

  /**
   * Ejecuta la petición HTTP y mapea los errores externos a errores internos.
   * El consumidor nunca recibe detalles de la HP API externa.
   */
  private async get<T>(path: string): Promise<T> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<T>(`${this.baseUrl}${path}`),
      );
      return data;
    } catch (error) {
      throw new ServiceUnavailableException(
        'El servicio de datos externo no está disponible. Intentar mas tarde.',
      );
    }
  }
}
