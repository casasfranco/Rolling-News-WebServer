import mongoose, { Schema } from "mongoose";

const categoriaSchema = new Schema(
  {
    nombreCat: { type: String, maxlength: 15, required: true},
    estadoCat: { type: Boolean, default: true, required: true }
  },
  { timestamps: true }
);

const Categoria = mongoose.model("categoria", categoriaSchema);

export default Categoria;
