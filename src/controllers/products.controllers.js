// // Productos temporales

// const products =[
//   { id: 1, nombre: "producto uno 1", precio: 10.0, cantidad: 100},
//   { id: 2, nombre: "producto dos 2", precio: 20.0, cantidad: 200},
//   { id: 3, nombre: "producto tres 3", precio: 30.0, cantidad: 300},
//   { id: 4, nombre: "producto cuatro 4", precio: 40.0, cantidad: 400},
//   { id: 5, nombre: "producto cinco 5", precio: 50.0, cantidad: 500}
// ]

import * as model from '../models/products.models.js';

// ------ GET -----------

//SI QUIERO MOSTRAR LISTA DE PRODUCTOS

 export const getAllProducts = (req, res) => {
  res.json(model.getAllProducts()); 
};

//SI QUIERO BUSCAR UN PRODUCTO con un parametro
//tiene que ir antes del parametro dinamico, los search NO estan definidos en la ruta, 
///products/search?nombre=no&precio=10
 
export const searchProducts = (req, res) => {
  const { name } = req.query

  const products = model.getAllProducts();

  const filteredProducts = products.filter((p) => 
    p.nombre.toLowerCase().includes(name.toLowerCase())
  );      
  res.json(filteredProducts); 
};

//SI QUIERO ENVIAR UN PRODUCTO por ID -- con parametro dinamico
//Si el producto no existe ARROJA MENSAJE DE ERROR

export const getProductById = (req, res) => {
  const { id } = req.params;

  const product = model.getProductById(id);

  if (!product) {
    res.status(404).json({error: "no existe el producto"});
  }
  res.json(product); 
};

// ------ POST -----------

//AGREGAR UN CAMBIO -- crear un Objeto (Producto)

export const createProduct = (req, res) => {
    const { name, price } = req.body //--> Se crea constante

    const newProduct = model.createProduct({ name, price }); //llama al modelo
    
    res.status(201).json(newProduct);  //--> retorna un 201 (create), un producto que se creo 
};

// ------ PUT -----------

// Para reemplazar un registro (Producto)

export const putProducts = (req, res) => {
  
  const productId = parseInt(req.params.id, 10); //--> Id se pasa a un entero
  const productIndex = products.findIndex((p) => p.id === productId); //busca el indice del producto por el Id
                                                                      
    if (productIndex === -1) {
      return res.status(404).json({error: "no existe el producto"}); //Para informar un error
  }
  const {nombre, precio, cantidad} = req.body; //--> Se crea constante

  products [productIndex] = {id: productId, nombre, precio, cantidad}; //--> para reemplazar el elemento
  res.json(products[productIndex]);  //--> respondo con json el producto que modifique
};

// ------ DELETE -----------

// Para borrar producto

export const deleteProducts = (req, res) => {
  
  const productId = parseInt(req.params.id, 10); //--> Id se pasa a un entero
  const productIndex = products.findIndex((p) => p.id === productId); //busca el indice del producto por el Id
                                                                      
    if (productIndex === -1) {
      return res.status(404).json({error: "Producto no encontrado"}); //Para informar un error
  }

  products.splice(productIndex, 1); //--> Quita el elemento

  res.status(204).send(); //--> Informa que se borro el elemento 204=sin contenido
};