import { Router } from "express";
import usuarioControler from "../controllers/usuario.controller";

const router = Router();

const {
  getUsuarios,
  altaUsuario,
  getUsuarioById,
  deleteUsuario,
  editarUsuario,
  getNivelUsuario,
  crearNivelUsuario,
} = usuarioControler;

router.route("/nivel").get(getNivelUsuario).post(crearNivelUsuario);

router.route("/").get(getUsuarios).post(altaUsuario);

router
  .route("/:id")
  .get(getUsuarioById)
  .put(editarUsuario)
  .delete(deleteUsuario);

export default router;
