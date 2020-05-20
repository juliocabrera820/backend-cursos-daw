import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Compra } from "../entidades/compra";

export const obtenerCompras = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const compras = await getRepository(Compra).find({
      relations: ["usuario"],
    });
    return res.json(compras);
  } catch (error) {
    return res.json({ message: error });
  }
};
