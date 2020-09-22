import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import jwt from "jsonwebtoken";
import "./database";
require("dotenv").config();
import usuarioRouter from "./routes/usuario.routes";
import noticiaRouter from "./routes/noticia.routes";
import categoriaRouter from "./routes/categoria.routes";
import Usuario from "./models/usuario";

const app = express();

app.set("expireTime", 9999 * 32424 * 2346 + 324 * 444443);
//Middlewares
app.use(morgan("dev"));
app.use(cors()); //Para realizar consultas desde una app exterior

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//esto es para acceder a la carpeta public
app.use(express.static(path.join(__dirname, "../public")));

app.post("/", async (req, res) => {
  try {
    const datos = await Noticia.find({estadoNoticia: true}); // busca todos los documentos(select)
    res.status(200).json(datos);
  } catch (error) {
    res
      .status(400)
      .json({  
        ok: false,
        mensaje: "ocurrio un error al obtener las noticias" });
    next(error);
  }
});




//Login y envio de token
app.post("/api/autenticar", async (req, res) => {
  try {
    const datos = await Usuario.find({
      nombreUsuario: req.body.nombreUsuario,
      passUsuario: req.body.passUsuario,
      estadoUsuario: 1
    }); 

    if (datos.length !== 0) { //Si encontro datos
      const payload = {
        check: true,
        user: req.body.nombreUsuario,
        contrasena: req.body.passUsuario,
      };
      
      //Creo el token
      const token = jwt.sign(payload, process.env.SEED, {
        expiresIn: app.get("expireTime"),
      });


      res.status(200).json({
        ok: true,
        mensaje: "Autenticación correcta",
        token: token,
      });
      
    } else {  //No encontro
      res.status(201).json({ 
        ok: false,
        mensaje: "Contraseña o usuario incorrectos" });
    }
  } catch (error) { //Hubo un error
    console.log(error);
    res.status(400).json({ mensaje: "ocurrio un error al iniciar sesion" });
  }
});

//Verifico la firma del token (compruebo si el token es correcto)
app.use((req, res, next) => {
  // let token = req.body.token;
  let token = req.get('token');
  const seed = process.env.SEED;


  jwt.verify(token, seed, (err, decoded) => {
    if (err) {
      return res.status(401).json({ ok: false, err });
    }
    //Esta verificado
    next();
  });
});

app.set("port", process.env.PORT || 4000); //Si esxiste esa variable, se guardara en este objeto.

//Defino rutas
app.use("/api/usuario", usuarioRouter);
app.use("/api/noticia", noticiaRouter);
app.use("/api/categoria", categoriaRouter);
//Escuchar el puerto
app.listen(app.get("port"), () => {
  console.log(path.join(__dirname, "../public"));
  console.log("Servidor en el puerto: " + app.get("port"));
});
