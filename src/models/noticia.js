import mongoose, { Schema } from "mongoose";

const noticiaSchema = new Schema(
  {
    volantaNoticia: { type: String, maxlength: 80, required: true },
    destacada: { type: Boolean, default: false, required: true },
    tituloPrincipalNoticia: { type: String, maxlength: 100, required: true },
    copeteNoticia: { type: String, maxlength: 250, required: true },
    urlImgPrincipalNoticia: { type: String, maxlength: 200, required: true },
    cuerpoNoticia: { type: String, maxlength: 20000, required: true },
    urlImgOpcionalNoticia: { type: String, maxlength: 200 },
    autorNoticia: { type: String, maxlength: 20 },
    categoriaNoticia: { type: String, maxlength: 20, required: true },
    publicadaNoticia: { type: Boolean, default: true, required: true },
    estadoNoticia: { type: Boolean, default: true, required: true },
  },
  { timestamps: true }
);

const Noticia = mongoose.model("noticia", noticiaSchema);

export default Noticia;
