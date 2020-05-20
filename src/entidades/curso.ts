import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  topico: string;

  @Column()
  duracion: string;

  @Column()
  lecciones: number;

  @Column()
  precio: number;
}
