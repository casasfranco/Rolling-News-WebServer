import { Router } from "express";
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


router.route("/").post(crearNoticia);

router
  .route("/:id")
  .get(getNoticiaById)
  .put(editarNoticia)
  .delete(deleteNoticia);

export default router;
