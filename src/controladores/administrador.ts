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

export const crearAdministrador = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { nombre, correo, contrasena } = req.body;
    const nuevoAdministrador = getRepository(Administrador).create({
      nombre,
      correo,
      contrasena,
    });
    const administrador = await getRepository(Administrador).save(
      nuevoAdministrador
    );
    return res.json(administrador);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const buscarPorCorreo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { correo } = req.params;
  try {
    const administrador = await getRepository(Administrador).findOne({
      where: { correo: `${correo}` },
    });
    if (administrador) {
      return res.status(200).json(administrador);
    }
    return res.status(400).json({ message: "No se encontro el administrador" });
  } catch (error) {
    res.json({ message: error });
  }
};
