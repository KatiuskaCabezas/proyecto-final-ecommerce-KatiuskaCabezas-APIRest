//modulos nativos, no se instalan

import fs from "fs"; 
import path from "path";

//Constante que da la ubicación exacta del archivo json, para poder leerlo

const __dirname = import.meta.dirname;

//Constante para poder leer el json

const jsonPath = path.join(__dirname, "./products.json");

//Constante para poder leer la data que esta en el json

const json = fs.readFileSync(jsonPath, "utf-8"); //--> el utf-8 se usa para poder leer el texto

//Constante de productos leido en JS

const products = JSON.parse(json);

// console.log (products);

//Para listar todos los productos

export const getAllProducts = () => {
    return products;
};

//Para buscar un productos

export const getProductById = (id) => {
  return products.find((item) => item.id == id);
};

// ------ POST -----------

//AGREGAR UN CAMBIO -- crear un Objeto (Producto)

export const createProduct = (data) => {
  const newProduct = {
      id: products.length +1,
      ...data,               //--> los datos que quiero cambiar
    };                       //--> Se crea un objeto
    
    products.push(newProduct);    //--> Se hace un push del nuevo objeto
    
    fs.writeFileSync(jsonPath, JSON.stringify(products)); //--> guardar el obj en JSON

    return newProduct;
};

// ------ DELETE -----------

// Para borrar producto

export const deleteProduct = (id) => {
  const productIndex = products.findIndex((p) => p.id === id); //busca el indice del producto por el Id    
  
  if (productIndex == -1) {
    return null;  
  } else {
    const product = products.splice(productIndex, 1); //--> Quita el elemento

    fs.writeFileSync(jsonPath, JSON.stringify(products)); //--> guardar el obj en JSON

    return product;
  };
  
};

