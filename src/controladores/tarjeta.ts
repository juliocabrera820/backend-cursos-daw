import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tarjeta } from "../entidades/tarjeta";

export const obtenerTarjetas = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const tarjetas = await getRepository(Tarjeta).find({
      relations: ["usuario"],
    });
    return res.json(tarjetas);
  } catch (error) {
    return res.json({ message: error });
  }
};
