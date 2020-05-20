import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Tarjeta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: string;

  @Column()
  fecha: string;

  @Column()
  cvc: string;

  @ManyToOne((type) => Usuario, (usuario) => usuario.tarjetas)
  usuario: Usuario;
}
