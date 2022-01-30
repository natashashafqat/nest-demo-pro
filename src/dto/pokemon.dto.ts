import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PokemonDTO {
  @IsNotEmpty() @IsString()
  readonly id: string;
  @IsNotEmpty() @IsString()
  readonly name: string;
  @IsNotEmpty() @IsString()
  readonly type: string;
}