import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./database";
import usuarioRouter from "./routes/usuario.routes";
import noticiaRouter from "./routes/noticia.routes";
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(cors()); //Para realizar consultas desde una app exterior


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


let isLogin = () => false;

app.use((req, res, next) => {
  console.log(req.get('token'));
  // next();
  if (req.body.token) {
    console.log('token:  ' + req.body.token);
  } else {
    res.send('No estas logueado');
  }
});





//esto es para acceder a la carpeta public
app.use(express.static(path.join(__dirname, "../public")));

app.set("port", process.env.PORT || 4000); //Si esxiste esa variable, se guardara en este objeto.

//Defino rutas
app.use('/api/usuario', usuarioRouter);
app.use('/api/noticia', noticiaRouter);

//Escuchar el puerto
app.listen(app.get("port"), () => {
  console.log(path.join(__dirname, "../public"));
  console.log("Servidor en el puerto: " + app.get("port"));
});
