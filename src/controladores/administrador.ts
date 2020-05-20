import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Administrador } from "../entidades/administrador";

export const obtenerAdministradores = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const administradores = await getRepository(Administrador).find();
    return res.json(administradores);
  } catch (error) {
    return res.json({ message: error });
  }
};
