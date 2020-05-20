import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Administrador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;
}
