import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { HttpCode, HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class CategoriaService {

    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ) {}

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }

    async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({
            where: {
                id: id
            }
        });

        if (!categoria) {
            throw new HttpException("Categoria não encontrada!", HttpStatus.NOT_FOUND);
        }

        return categoria;
    }

    async findAllByTitulo(titulo: string): Promise<Categoria[]> {
        const categorias = await this.categoriaRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            }
        });

        if (!categorias || categorias.length === 0) {
            throw new HttpException("Categoria não encontrada!", HttpStatus.NOT_FOUND);
        }

        return categorias;
    }

    async create(categoria: Categoria): Promise<Categoria> {
        const buscaCateg = await this.categoriaRepository.findOne({
            where: {
                titulo: categoria.titulo
            }
        });

        if (buscaCateg != null) {
            throw new HttpException("Categoria já existe!", HttpStatus.CONFLICT);
        }

        return await this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria) {
        await this.findById(categoria.id);

        categoria.titulo = categoria.titulo.toLowerCase();

        const validaCateg = await this.categoriaRepository.findOne({
            where: { 
                titulo: categoria.titulo 
            }
        });
        
        if (validaCateg && validaCateg.id !== categoria.id) {
            throw new HttpException("Categoria já existe!", HttpStatus.CONFLICT);
        }

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);

        return await this.categoriaRepository.delete(id);
    }
}