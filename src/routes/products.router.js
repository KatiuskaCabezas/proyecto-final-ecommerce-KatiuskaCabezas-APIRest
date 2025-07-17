import { Router } from "express";

const router = Router();

import {
  getAllProducts,
  searchProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controllers.js";

// ------ GET -----------

//SI QUIERO MOSTRAR LISTA DE PRODUCTOS

router.get("/products", getAllProducts);

//SI QUIERO BUSCAR UN PRODUCTO POR NOMBRE
//tiene que ir antes del parametro dinamico, los search NO estan definidos en la ruta, 
///api/products/search?name=palabra

router.get("/products/search", searchProducts);

//SI QUIERO BUSCAR UN PRODUCTO por ID -- con parametro dinamico
//Si el producto no existe ARROJA MENSAJE DE ERROR

router.get("/products/:id", getProductById);

// ------ POST -----------

//AGREGAR UN CAMBIO -- CREAR UN PRODUCTO

router.post("/products", createProduct);

// ------ PUT -----------

router.put("/products/:id", updateProduct);

// ------ DELETE -----------

// BORRAR UN PRODCUTO

router.delete("/products/:id", deleteProduct);

export default router; // Exportación por default