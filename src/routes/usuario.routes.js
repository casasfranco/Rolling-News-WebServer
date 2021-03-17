import { Router } from "express";
import usuarioControler from "../controllers/usuario.controller";
import { verifyToken, verifyUserLevel } from "../middlewares/auth";

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

router
  .route("/nivel")
  .all(verifyToken)
  .get(getNivelUsuario)
  .post(crearNivelUsuario);

router.route("/").all(verifyUserLevel).get(getUsuarios);

router.route("/register").post(altaUsuario);

router
  .route("/:id")
  .all(verifyUserLevel)
  .get(getUsuarioById)
  .put(editarUsuario)
  .delete(deleteUsuario);

export default router;
