import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Usuario } from "../entidades/usuario";
import { Compra } from "../entidades/compra";

export const obtenerUsuarios = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const usuarios = await getRepository(Usuario).find({
      relations: ["compras"],
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
    const {
      nombre,
      apellido,
      correo,
      contrasena,
      numero,
      fecha,
      cvc,
    } = req.body;
    const nuevoUsuario = getRepository(Usuario).create({
      nombre,
      apellido,
      correo,
      contrasena,
      fecha,
      numero,
      cvc,
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
      relations: ["compras"],
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
    const usuario = await getRepository(Usuario).findOne(id);
    if (usuario) {
      getRepository(Usuario).merge(usuario, {
        nombre,
        apellido,
        correo,
        contrasena,
        numero,
        fecha,
        cvc,
      });
      const usuarioActualizado = await getRepository(Usuario).save(usuario);
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
