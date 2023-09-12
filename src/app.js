const express = require("express");
const route = require("./routes/createRoutes");
const validateBody = require("./middleware/validateBody");

const app = express();

//json es un middleware incorporado de express, el cual nos añade la propieda body
//al objeto Request (req), es decir que sin este middleware al hacer un console.log()
//de req.body, veremos "undefined"
app.use(express.json()); //permite acceder al body "req.body"

//middleware que hicimos para validar que al hacer un POST,
//la solicitud si traiga información
app.use(validateBody);

//static es un middleware incorporado de express, el cual como su nombre lo indica,
//nos permite sevir archivos estaticos (como imagenes)
//express.static recibe un root, que será el nombre de la carpeta en donde estarán
//esos archivos, la carpeta debe estar a nivel del directorio raíz, (al mismo nivel en donde esta el package.json y node_modules)

app.use("/imagenes", express.static("public")); //http://localhost:3000/imagenes/gatito2.jpg

app.use(express.static("public")); // http://localhost:3000/gatito3.jpg

app.use("/create", route);

module.exports = app;
