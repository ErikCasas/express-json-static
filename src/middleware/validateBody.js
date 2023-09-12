//middleware que valida que las solicitudes de tipo POST traigan
//información

//se usa el operador ternario para hacer mas legible el código
const validateBody = (req, res, next) => {
  req.method === "POST" && Object.values(req.body).length === 0
    ? res.status(400).json("se necesita información en el body")
    : next();
};

module.exports = validateBody;
