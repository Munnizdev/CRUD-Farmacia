import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaController } from './categoria/controllers/categoria.controller';
import { CategoriaService } from './categoria/services/categoria.service';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_crud_farmacia',
      entities: [Categoria],
      synchronize: true
    }),
    CategoriaModule
  ]
})
export class AppModule {}
