import Usuario from "../models/usuario";
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
  try {
    const datos = await Usuario.find(); // busca todos los documentos(select)
    res.status(200).json(datos);
  } catch (error) {
    res.status(400).json({ mensaje: "ocurrio un error al obtener los usuario" });
    next(error);
  }
};

usuarioCtrl.getUsuarioById = async (req, res) => {
  try {
    console.log(req.params.id);
    const usuarioEncontrado = await Usuario.findById(req.params.id);
    res.status(200).json(usuarioEncontrado);
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Ocurrio un error al obtener el usuario" });
    next(error);
  }
};

usuarioCtrl.altaUsuario = async (req, res) => {
  console.log(req.body);
  const {
    nombre,
    apellido,
    nombreUsuario,
    passUsuario,
    direccionUsuario,
    localidadUsuario,
    cpUsuario,
    numTelefonoUsuario,
    perfilUsuario,
    estadoUsuario,
  } = req.body;

  try {
    const usuarioNuevo = new Usuario({
      nombre,
      apellido,
      nombreUsuario,
      passUsuario,
      direccionUsuario,
      localidadUsuario,
      cpUsuario,
      numTelefonoUsuario,
      perfilUsuario,
      estadoUsuario,
    });

    await usuarioNuevo.save();
    res.status(200).json({ mensaje: "El usuario fue creado con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "No se pudo crear el usuario" });
    next(error);
  }
};


usuarioCtrl.editarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "Usuario actualizado con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Ocurrio un error al actualizar el usuario" });
    next(error);
  }
};

usuarioCtrl.deleteUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Se elimino el usuario" });
  } catch (error) {
    res.status(400).json({ mensaje: "ocurrio un error al eliminar el usuario" });
    next(error);
  }
};



export default usuarioCtrl;