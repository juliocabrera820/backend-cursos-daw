import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Tarjeta } from "./tarjeta";
import { Compra } from "./compra";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;

  @OneToMany((type) => Tarjeta, (tarjeta) => tarjeta.usuario)
  tarjetas: Tarjeta[];
  @OneToMany((type) => Compra, (compra) => compra.usuario)
  compras: Compra[];
}
