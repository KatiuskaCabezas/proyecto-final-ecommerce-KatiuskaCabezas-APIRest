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

//Importar la base de datos desde firestore

import  { db } from "./data.js";

import { 
  collection, 
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc, 
} from "firebase/firestore";

//constante para buscar los productos

const productsCollection = collection(db, "products");

// ------ GET -----------

//Para listar todos los productos

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
};

//Para buscar un productos

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

//AGREGAR UN CAMBIO -- crear un Objeto (Producto)

export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};

// ------ DELETE -----------

// Para borrar producto

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



