import Noticia from "../models/noticia";
const noticiaCtrl = {};

noticiaCtrl.getNoticia = async (req, res) => {
  try {
    const datos = await Noticia.find(); // busca todos los documentos(select)
    res.status(200).json(datos);
  } catch (error) {
    res
      .status(400)
      .json({ mensaje: "ocurrio un error al obtener las noticias" });
    next(error);
  }
};

noticiaCtrl.getNoticiaById = async (req, res) => {
  try {
    console.log(req.params.id);
    const noticiaEncontrada = await Noticia.findById(req.params.id);
    res.status(200).json(noticiaEncontrada);
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Ocurrio un error al obtener la noticia" });
    next(error);
  }
};

noticiaCtrl.crearNoticia = async (req, res) => {
  console.log(req.body);
  const {
    volantaNoticia,
    tituloPrincipalNoticia,
    copeteNoticia,
    urlImgPrincipalNoticia,
    cuerpoNoticia,
    urlImgOpcionalNoticia,
    autorNoticia,
    categoriaNoticia,
    publicadaNoticia,
    estadoNoticia,
  } = req.body;

  try {
    const noticiaNueva = new Noticia({
      volantaNoticia,
      tituloPrincipalNoticia,
      copeteNoticia,
      urlImgPrincipalNoticia,
      cuerpoNoticia,
      urlImgOpcionalNoticia,
      autorNoticia,
      categoriaNoticia,
      publicadaNoticia,
      estadoNoticia,
    });

    await noticiaNueva.save();
    res.status(200).json({ mensaje: "La noticia fue creada con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "No se pudo crear la noticia" });
    next(error);
  }
};

noticiaCtrl.editarNoticia = async (req, res) => {
  try {
    await Noticia.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "Noticia actualizada con exito" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ mensaje: "Ocurrio un error al actualizar la noticia" });
    next(error);
  }
};

noticiaCtrl.deleteNoticia = async (req, res) => {
  try {
    await Noticia.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Se elimino la noticia" });
  } catch (error) {
    res
      .status(400)
      .json({ mensaje: "ocurrio un error al eliminar la noticia" });
    next(error);
  }
};

export default noticiaCtrl;