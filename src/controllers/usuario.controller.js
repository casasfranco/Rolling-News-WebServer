import Usuario from "../models/usuario";
import NivelUsuario from "../models/nivelUsuario"
const usuarioCtrl = {};

usuarioCtrl.getNivelUsuario = async (req, res) => {
  try {
    const datos = await NivelUsuario.find(); // busca todos los documentos(select)
    res.status(200).json(datos);
  } catch (error) {
    res.status(400).json({ 
      ok: false,
      mensaje: "ocurrio un error al obtener los niveles de usuarios" });
    next(error);
  }
};

usuarioCtrl.getUsuarios = async (req, res) => {
  try {
    const datos = await Usuario.find(); // busca todos los documentos(select)
    res.status(200).json(datos);
  } catch (error) {
    res.status(400).json({ 
      ok: false,
      mensaje: "ocurrio un error al obtener los usuario" });
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
    res.status(400).json({  
      ok: false,
      mensaje: "Ocurrio un error al obtener el usuario" });
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
    emailUsuario,
    direccionUsuario,
    provinciaUsuario,
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
      emailUsuario,
      direccionUsuario,
      provinciaUsuario,
      localidadUsuario,
      cpUsuario,
      numTelefonoUsuario,
      perfilUsuario,
      estadoUsuario,
    });

    console.log(usuarioNuevo);
    await usuarioNuevo.save();
    res.status(200).json({ mensaje: "El usuario fue creado con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({  
      ok: false,
      mensaje: "No se pudo crear el usuario",
   });
  }
};


usuarioCtrl.editarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "Usuario actualizado con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({  
      ok: false,
      mensaje: "Ocurrio un error al actualizar el usuario" });
    next(error);
  }
};

usuarioCtrl.deleteUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Se elimino el usuario" });
  } catch (error) {
    res.status(400).json({  
      ok: false,
      mensaje: "ocurrio un error al eliminar el usuario" });
    next(error);
  }
};



export default usuarioCtrl;