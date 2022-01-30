import { Injectable } from '@nestjs/common';
import { Pokemon } from 'src/interfaces/pokemon.interface';

@Injectable()
export class PokemonService {
  pokemon: Pokemon[] = [];
  create(newPokemon: Pokemon): Pokemon[] {
    this.pokemon.push(newPokemon);
    return this.pokemon;
  }

  findAll(): Pokemon[] {
    return this.pokemon;
  }

  findById(id: string): Pokemon {
    return this.pokemon.find((p) => p.id === id);
  }

  delete(id: string): Pokemon[] {
    const index = this.pokemon.findIndex((singlePokemon) => singlePokemon.id === id);
    this.pokemon.splice(index, 1);
    return this.pokemon;
  }
}
