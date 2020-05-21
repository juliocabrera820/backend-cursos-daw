import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
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

  @Column()
  numero: string;

  @Column()
  fecha: string;

  @Column()
  cvc: number;

  @OneToMany((type) => Compra, (compra) => compra.usuario)
  compras: Compra[];
}
