import { Module } from "@nestjs/common";
import { Produto } from "./entities/produto.entity";
import { ProdutoService } from "./services/produto.service";
import { ProdutoController } from "./controllers/produto.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaModule } from "src/categoria/categoria.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Produto]),
        CategoriaModule
    ],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: []
})
export class ProdutoModule {}