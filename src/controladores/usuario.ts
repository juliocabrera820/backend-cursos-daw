import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Usuario } from "../entidades/usuario";
import { Compra } from "../entidades/compra";
import { Tarjeta } from "../entidades/tarjeta";

export const obtenerUsuarios = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const usuarios = await getRepository(Usuario).find({
      relations: ["compras", "tarjetas"],
    });
    return res.json(usuarios);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const crearUsuario = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { nombre, apellido, correo, contrasena } = req.body;
    const nuevoUsuario = getRepository(Usuario).create({
      nombre,
      apellido,
      correo,
      contrasena,
    });
    const usuario = await getRepository(Usuario).save(nuevoUsuario);
    return res.json(usuario);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const obtenerUsuario = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const usuario = await getRepository(Usuario).findOne({
      where: { id: `${id}` },
      relations: ["tarjetas"],
    });
    return res.json(usuario);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const actualizar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { nombre, apellido, correo, contrasena, numero, fecha, cvc } = req.body;
  try {
    const usuario = await getRepository(Usuario).findOne({
      where: { id: `${id}` },
      relations: ["tarjetas"],
    });
    const tarjeta = usuario.tarjetas;
    if (usuario) {
      getRepository(Usuario).merge(usuario, {
        nombre,
        apellido,
        correo,
        contrasena,
      });
      const usuarioActualizado = await getRepository(Usuario).save(usuario);
      getRepository(Tarjeta).merge(tarjeta[0], { numero, fecha, cvc });
      getRepository(Tarjeta).save(tarjeta);
      return res.json(usuarioActualizado);
    }
    return res.json({ message: "El usuario no existe" });
  } catch (error) {
    return res.json({ message: error });
  }
};

export const eliminar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const eliminado = await getRepository(Usuario).delete(id);
    return res.json(eliminado);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const agregarTarjeta = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { numero, fecha, cvc } = req.body;
  try {
    const usuario = await getRepository(Usuario).findOne(id);
    const tarjeta = getRepository(Tarjeta).create({
      numero,
      fecha,
      cvc,
    });
    tarjeta.usuario = usuario;
    getRepository(Tarjeta).save(tarjeta);
    usuario.tarjetas = [...usuario.tarjetas, tarjeta];
    await getRepository(Usuario).save(usuario);
    return res.json(usuario);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const agregarCompra = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { nombre, descripcion, topico, duracion, lecciones, precio } = req.body;
  try {
    const usuario = await getRepository(Usuario).findOne(id);
    const compra = getRepository(Compra).create({
      nombre,
      descripcion,
      topico,
      duracion,
      lecciones,
      precio,
    });
    compra.usuario = usuario;
    getRepository(Compra).save(compra);
    usuario.compras = [...usuario.compras, compra];
    await getRepository(Usuario).save(usuario);
    return res.json(usuario);
  } catch (error) {
    return res.json({ message: error });
  }
};
