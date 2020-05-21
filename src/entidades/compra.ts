import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Compra {
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

  @ManyToOne((type) => Usuario, (usuario) => usuario.compras, {
    onDelete: "CASCADE",
  })
  usuario: Usuario;
}
