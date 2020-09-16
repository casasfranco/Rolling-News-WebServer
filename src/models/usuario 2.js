import mongoose, { Schema } from "mongoose";
const usuarioSchema = new Schema(
  {
    nombre: { type: String, maxlength: 20, required: true, unique: true },
    apellido: { type: String, maxlength: 30, required: true },
    nombreUsuario: { type: String, maxlength: 30, required: true },
    passUsuario: { type: String, minlength:6, maxlength: 30, required: true },
    direccionUsuario: { type: String, required: true },
    localidadUsuario: { type: String, required: true },
    cpUsuario: { type: Number, required: true },
    numTelefonoUsuario: { type: String, required: true },
    perfilUsuario: { type: String, required: true },
    estadoUsuario: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;

// ■	Apellido y nombre
// ■	Dirección
// ■	Localidad
// ■	Código postal
// ■	Teléfono
// ■	Email
// ■	perfil (editor en este caso)
// ■	usuario
// ■	contraseña
// ■	estado:  habilitado o inhabilitado
