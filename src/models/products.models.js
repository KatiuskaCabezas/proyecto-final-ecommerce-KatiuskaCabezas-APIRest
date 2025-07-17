//Importar la base de datos desde firestore

import  { db } from "./data.js";

import { 
  collection, 
  getDocs,
  doc,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc, 
} from "firebase/firestore";

//constante para buscar los productos

const productsCollection = collection(db, "products");

// ------ GET -----------

//SI QUIERO MOSTRAR LISTA DE PRODUCTOS

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
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

export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error(error);
  }
};

// ------ POST -----------

//AGREGAR UN CAMBIO -- CREAR UN PRODUCTO

export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};

// ------ PUT ----------

export const updateProduct = async (id, updatedProductData) => {
  try {
    const docRef = doc(productsCollection, id);
    await setDoc(docRef, updatedProductData, { merge: true });
    return { id, ...updatedProductData };
  } catch (error) {
    console.error(error);
    return null;
  }
};

// ------ DELETE -----------

// BORRAR UN PRODCUTO

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error(error);
  }
};



