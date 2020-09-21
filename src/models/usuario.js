import mongoose, { Schema } from "mongoose";
const usuarioSchema = new Schema(
  {
    nombre: { type: String, maxlength: 20, required: true},
    apellido: { type: String, maxlength: 30, required: true },
    nombreUsuario: { type: String, maxlength: 30, required: true, unique: true },
    passUsuario: { type: String, required: true, maxlength: 30 },
    emailUsuario: { type: String, required: true, maxlength: 30 },
    direccionUsuario: { type: String, required: true, maxlength: 40 },
    provinciaUsuario: { type: String, required: true, maxlength: 40 },
    localidadUsuario: { type: String, required: true, maxlength: 40 },
    cpUsuario: { type: Number, required: true },
    numTelefonoUsuario: { type: String, required: true },
    perfilUsuario: { type: String, required: true, maxlength: 15 },
    estadoUsuario: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;