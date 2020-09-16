import Categoria from "../models/categoria";
const categoriaCtrl = {};

categoriaCtrl.getCategoria = async (req, res) => {
  try {
    const datos = await Categoria.find(); // busca todos los documentos(select)
    res.status(200).json(datos);
  } catch (error) {
    res
      .status(400)
      .json({ mensaje: "ocurrio un error al obtener las categorias" });
    next(error);
  }
};

categoriaCtrl.getCategoriaById = async (req, res) => {
  try {
    console.log(req.params.id);
    const categoriaEncontrada = await Categoria.findById(req.params.id);
    res.status(200).json(categoriaEncontrada);
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Ocurrio un error al obtener la categoria" });
    next(error);
  }
};

categoriaCtrl.crearCategoria = async (req, res) => {
  console.log(req.body);
  const {
    nombreCat,
    estadoCat,
  } = req.body;

  try {
    const categoriaNueva = new Categoria({
        nombreCat,
        estadoCat,
    });

    await categoriaNueva.save();
    res.status(200).json({ mensaje: "La categoria fue creada con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "No se pudo crear la categoria" });
    next(error);
  }
};

categoriaCtrl.editarCategoria = async (req, res) => {
  try {
    await Categoria.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "Categoria actualizada con exito" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ mensaje: "Ocurrio un error al actualizar la categoria" });
    next(error);
  }
};

categoriaCtrl.deleteCategoria = async (req, res) => {
  try {
    await Categoria.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Se elimino la categoria" });
  } catch (error) {
    res
      .status(400)
      .json({ mensaje: "ocurrio un error al eliminar la categoria" });
    next(error);
  }
};

export default categoriaCtrl;

