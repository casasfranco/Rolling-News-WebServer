import { Router } from "express";
import { verifyToken, verifyUserLevel } from "../middlewares/auth";
import noticiaController from "../controllers/noticia.controller";
const router = Router();

//destructuramiento
const {
    getNoticia,
    getNoticiaById,
    crearNoticia,
    editarNoticia,
    deleteNoticia,
} = noticiaController;


router.route("/").get(getNoticia).post(crearNoticia);

router
  .route("/:id")
  .all(verifyToken)
  .get(getNoticiaById)
  .put(editarNoticia)
  .delete(deleteNoticia);

export default router;
