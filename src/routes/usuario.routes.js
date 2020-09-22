import { Router } from "express";
import usuarioControler from "../controllers/usuario.controller";

const router = Router();

const {
  getUsuarios,
  altaUsuario,
  getUsuarioById,
  deleteUsuario,
  editarUsuario,
} = usuarioControler;

router
  .route("/")
  .get(getUsuarios)
  .post(altaUsuario);

router
  .route("/:id")
  .get(getUsuarioById)
  .put(editarUsuario)
  .delete(deleteUsuario);
  
export default router;
