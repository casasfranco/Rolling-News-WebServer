import jwt from "jsonwebtoken";
// Verifico la firma del token (compruebo si el token es correcto)
export const verifyToken = (req, res, next) => {
  // let token = req.body.token;
  let token = req.get("token");
  const seed = process.env.SEED;

  jwt.verify(token, seed, (err, decoded) => {
    if (err) {
      return res.status(401).json({ ok: false, data: "Erorr 401" });
    }
    //Esta verificado
    console.log(decoded);
    req.body.userLevel = decoded.perfilUsuario;
    next();
  });
};

// Verifico nivel de usuario
export const verifyUserLevel = async (req, res, next) => {
  await verifyToken(req, res, next);

  const userLevel = req.body.userLevel;
  //console.log(userLevel);
  if (userLevel === "admin") {
    console.log(userLevel);
  } else {
    return res.status(401).json({ ok: false, data: "Erorr 401" });
  }
};

module.export = verifyToken;
module.export = verifyUserLevel;
