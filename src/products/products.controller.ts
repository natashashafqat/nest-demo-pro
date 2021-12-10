import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Post()
    async create(@Body() product: ProductDTO): Promise<Product[]> {
        return this.productsService.create(product);
    }

    @Get()
    async find(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    async findById(@Param() params): Promise<Product> {
        console.log(params);
        return this.productsService.findById(params.id);
    }
}