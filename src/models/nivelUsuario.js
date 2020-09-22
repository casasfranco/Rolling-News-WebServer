import mongoose, { Schema } from "mongoose";

const nivelUsuarioSchema = new Schema(
  {
    nombreNivel: { type: String, maxlength: 15, required: true},
    estadoNivel: { type: Boolean, default: true, required: true }
  },
  { timestamps: true }
);

const NivelUsuario = mongoose.model("nivelUsuario", nivelUsuarioSchema);

export default NivelUsuario;
