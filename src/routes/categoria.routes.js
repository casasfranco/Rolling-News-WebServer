import { Router } from "express";
import categoriaController from "../controllers/categoria.controller";
const router = Router();

//destructuramiento
const {
    getCategoria,
    getCategoriaById,
    crearCategoria,
    editarCategoria,
    deleteCategoria,
} = categoriaController;


router.route("/").get(getCategoria).post(crearCategoria);

router.route("/all").post(getCategoria);

router
  .route("/:id")
  .get(getCategoriaById)
  .put(editarCategoria)
  .delete(deleteCategoria);

export default router;