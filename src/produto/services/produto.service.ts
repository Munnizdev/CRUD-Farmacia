import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { CategoriaService } from "src/categoria/services/categoria.service";

@Injectable()
export class ProdutoService {

    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
        private categoriaService: CategoriaService
    ) {}

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({
            relations: {
                categoria: true
            }
        });
    }

    async findById(id: number) {
        const produto = await this.produtoRepository.findOne({
            where: {
                id: id
            },
            relations: {
                categoria: true
            }
        });

        if (!produto) {
            throw new HttpException("Produto não foi encontrado!", HttpStatus.NOT_FOUND);
        }

        return produto;
    }

    async findAllByTitulo(titulo: string) {
        const produtos = await this.produtoRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            },
            relations: {
                categoria: true
            }
        });

        if (!produtos || produtos.length === 0) {
            throw new HttpException("Produto não foi encontrado!", HttpStatus.NOT_FOUND);
        }

        return produtos;
    }

    async create(produto: Produto): Promise<Produto> {
        await this.categoriaService.findById(produto.categoria.id);

        produto.dosagem = produto.dosagem.toLowerCase();
        produto.laboratorio = produto.laboratorio.toLowerCase();
        produto.titulo = produto.titulo.toLowerCase();

        return this.produtoRepository.save(produto);
    }

    async update(produto: Produto): Promise<Produto> {
        await this.categoriaService.findById(produto.categoria.id);
        await this.findById(produto.id);

        produto.dosagem = produto.dosagem.toLowerCase();
        produto.laboratorio = produto.laboratorio.toLowerCase();
        produto.titulo = produto.titulo.toLowerCase();

        return await this.produtoRepository.save(produto);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);

        return await this.produtoRepository.delete(id);
    }
}