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

// router.route("/autenticar").post([getUsuarios, (req, res) => {
//   if (req.body.usuario === "asfo" && req.body.contrasena === "holamundo") {
//     const payload = {
//       check: true,
//       user: req.body.usuario,
//       contrasena: req.body.contrasena,
//     };
//     const token = jwt.sign(payload, process.env.SEED, {
//       expiresIn: 1440,
//     });
//     res.json({
//       mensaje: "Autenticación correcta",
//       token: token,
//     });
//   } else {
//     res.json({ mensaje: "Usuario o contraseña incorrectos" });
//   }
// }]);

export default router;
