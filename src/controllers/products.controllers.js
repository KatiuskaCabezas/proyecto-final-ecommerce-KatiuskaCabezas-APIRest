import * as model from '../models/products.models.js';

// ------ GET -----------

//SI QUIERO MOSTRAR LISTA DE PRODUCTOS

export const getAllProducts = async (req, res) => {
  const products = await model.getAllProducts();

  res.json(products);
};

//SI QUIERO BUSCAR UN PRODUCTO POR NOMBRE
//tiene que ir antes del parametro dinamico, los search NO estan definidos en la ruta, 
///api/products/search?name=palabra
 
export const searchProducts = async (req, res) => {
  const { name } = req.query

  const products = await model.getAllProducts();

  const filteredProducts = products.filter((p) => 
    p.nombre.toLowerCase().includes(name.toLowerCase())
  );      
  res.json(filteredProducts); 
};

//SI QUIERO BUSCAR UN PRODUCTO por ID -- con parametro dinamico
//Si el producto no existe ARROJA MENSAJE DE ERROR

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await model.getProductById(id);

  if (!product) {
    res.status(404).json({error: "no existe el producto"});
  }
  res.json(product); 
};

// ------ POST -----------

//AGREGAR UN CAMBIO -- CREAR UN PRODUCTO

export const createProduct = async (req, res) => {
    const { name, price, categories } = req.body //--> Se crea constante

    const newProduct = await model.createProduct({ name, price, categories }); //llama al modelo
    
    res.status(201).json(newProduct);  //--> retorna un 201 (create), un producto que se creo 
};

// ------ PUT ----------

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProductData = req.body;

  const updatedProduct = await model.updateProduct(id, updatedProductData);

  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// ------ DELETE -----------

//BORRAR UN PRODCUTO

export const deleteProduct = async (req, res) => {
  
  const productId = req.params.id; //--> Id alfanumerico

  const product = await model.deleteProduct(productId);  //--> Llama al modelo con el Id

    if (!product) {
      return res.status(404).json({error: "Producto no encontrado"}); //Para informar un error
  }  

  res.status(204).send(); //--> Informa que se borro el elemento 204=sin contenido
};