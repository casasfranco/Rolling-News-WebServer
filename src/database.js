import mongoose, { connect } from "mongoose";
require('dotenv').config();

const url = process.env.MONGODB_URL; 

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

conn.once("open", () => {
  console.log("Base de datos conectada con exito");
});
