const { Router } = require("express");
const users = require("../data/users");
const products = require("../data/products");

const route = Router();

//crear un usuario 
route.post("/user", (req, res) => {
  const newUSer = req.body;
  users.push(newUSer);
  res.status(201).json({ newUSer });
});

//obetener una lista de usuarios
route.get("/user", (_req, res) => {
  res.status(201).json(users);
});

//------------------------------------------

//crear un producto 
route.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json({ newProduct });
});

//obtener la lista de productos
route.get("/products", (_req, res) => {
  res.status(201).json(products);
});
module.exports = route;
