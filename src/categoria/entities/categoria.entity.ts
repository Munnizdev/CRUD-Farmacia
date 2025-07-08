import { Min } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_categorias'})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Min(4)
    @Column({length: 100, nullable: false, unique: true})
    titulo: string;

    @Column({length: 200})
    descricao: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[];
}