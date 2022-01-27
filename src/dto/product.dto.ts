import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDTO {
  @IsNotEmpty() @IsString()
  readonly id: string;
  @IsNotEmpty() @IsString()
  readonly name: string;
  @IsNotEmpty() @IsNumber()
  readonly qty: number;
  @IsNotEmpty() @IsNumber()
  readonly price: number;
}