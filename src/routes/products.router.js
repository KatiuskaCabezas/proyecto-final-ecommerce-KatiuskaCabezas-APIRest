import { Router } from "express";

const router = Router();

import {
  getAllProducts,
  searchProducts,
  getProductById,
  createProduct,
  putProducts,
  deleteProduct,
} from "../controllers/products.controllers.js";

// Productos temporales

const products =[
  { id: 1, nombre: "producto uno 1", precio: 10.0, cantidad: 100},
  { id: 2, nombre: "producto dos 2", precio: 20.0, cantidad: 200},
  { id: 3, nombre: "producto tres 3", precio: 30.0, cantidad: 300},
  { id: 4, nombre: "producto cuatro 4", precio: 40.0, cantidad: 400},
  { id: 5, nombre: "producto cinco 5", precio: 50.0, cantidad: 500}
]

// ------ GET -----------

//SI QUIERO MOSTRAR LISTA DE PRODUCTOS

router.get("/products", getAllProducts);

//SI QUIERO BUSCAR UN PRODUCTO con un parametro
//tiene que ir antes del parametro dinamico, los search NO estan definidos en la ruta, 
///products/search?nombre=no&precio=10

router.get("/products/search", searchProducts);

//SI QUIERO ENVIAR UN PRODUCTO por ID -- con parametro dinamico
//Si el producto no existe ARROJA MENSAJE DE ERROR

router.get("/products/:id", getProductById);

// ------ POST -----------

//AGREGAR UN CAMBIO -- crear un Objeto

router.post("/products", createProduct);

// ------ PUT -----------

// Para reemplazar un registro (Producto)

router.put("/products/:id", putProducts);

// ------ DELETE -----------

// Para borrar producto

router.delete("/products/:id", deleteProduct);

export default router; // Exportación por default