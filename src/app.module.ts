import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: '/pokemon', method: RequestMethod.POST })
      .forRoutes(PokemonController);
  }
}
