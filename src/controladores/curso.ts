import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Curso } from "../entidades/curso";

export const obtenerCursos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const cursos = await getRepository(Curso).find();
    return res.json(cursos);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const crearCurso = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      nombre,
      descripcion,
      topico,
      duracion,
      lecciones,
      precio,
    } = req.body;
    const nuevoCurso = getRepository(Curso).create({
      nombre,
      descripcion,
      topico,
      duracion,
      lecciones,
      precio,
    });
    const curso = await getRepository(Curso).save(nuevoCurso);
    return res.json(curso);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const obtenerCurso = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const curso = await getRepository(Curso).findOne(id);
    return res.json(curso);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const actualizar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const curso = await getRepository(Curso).findOne(id);
    if (curso) {
      getRepository(Curso).merge(curso, req.body);
      const cursoActualizado = await getRepository(Curso).save(curso);
      return res.json(cursoActualizado);
    }
    return res.json({ message: "El curso no existe" });
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
    const eliminado = await getRepository(Curso).delete(id);
    return res.json(eliminado);
  } catch (error) {
    return res.json({ message: error });
  }
};
