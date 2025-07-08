import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("tb_produtos")
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    dosagem: string;
    
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    laboratorio: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, { onDelete: 'CASCADE' })
    categoria: Categoria;
}