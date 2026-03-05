import { Module, Global } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HpApiService } from './hp-api.service';

@Global()
@Module({
  imports: [
    HttpModule.register({
      timeout: 10000,   // 10 segundos máximo de espera
      maxRedirects: 3,
    }),
  ],
  providers: [HpApiService],
  exports: [HpApiService],
})
export class HpApiModule {}
