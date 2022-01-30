import { Body, Controller, Delete, Get, Param, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { PokemonDTO } from 'src/dto/pokemon.dto';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class PokemonController {
  constructor(private pokemonService: PokemonService) { }

  @Post()
  async create(@Body() newPokemon: PokemonDTO): Promise<Pokemon[]> {
    return this.pokemonService.create(newPokemon);
  }

  @Get()
  async find(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  async findById(@Param() params): Promise<Pokemon> {
    return this.pokemonService.findById(params.id);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Pokemon[]> {
    return this.pokemonService.delete(params.id);
  }
}
