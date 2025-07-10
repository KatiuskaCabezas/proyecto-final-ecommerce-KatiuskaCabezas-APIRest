//SERVIDOR //

import express from "express"; // --> Importar express
import cors from "cors";  // --> Importar cors

const app = express(); 

const products =[
  { id: 1, nombre: "producto uno 1", precio: 10.0, cantidad: 100},
  { id: 2, nombre: "producto dos 2", precio: 20.0, cantidad: 200},
  { id: 3, nombre: "producto tres 3", precio: 30.0, cantidad: 300},
  { id: 4, nombre: "producto cuatro 4", precio: 40.0, cantidad: 400},
  { id: 5, nombre: "producto cinco 5", precio: 50.0, cantidad: 500}
]

// Usar MIDDLEWARE para poder leer el cambio con POST -- va antes de las peticiones
//Llega la petición el middleware detecta si tiene un cuerpo, lo trasnforma para ser leída

app.use(cors());   //--> usar cors

app.use(express.json());  //--> usar express

//RUTAS --- METODOS --

// ------ GET -----------

app.get("/", (req, res) => {
  res.send("API Rest con Node.js"); 
});

//SI QUIERO MOSTRAR LISTA DE PRODUCTOS

app.get("/products", (req, res) => {
  res.json(products); //--> INDICAR SIEMPRE QUE ENVIAS UN JSON
});

//SI QUIERO ENVIAR UN PRODUCTO EN ESPECIFICO

app.get("/products/2", (req, res) => {
  const product = products.find((item) => item.id == 2);
  res.json(product); // INDICAR SIEMPRE QUE ENVIAS UN JSON
});

//SI QUIERO ENVIAR UN PARAMETRO, EJ: ID -- es dinamico
       // los params estan definidos en la ruta

// app.get("/products/:id", (req, res) => {
//   const product = products.find((item) => item.id == req.params.id);
//   res.json(product); // INDICAR SIEMPRE QUE ENVIAS UN JSON
// });

//SI QUIERO ENVIAR VARIOS PARAMETROS, ORDENAR -- es dinamico

// app.get("/products/:id", (req, res) => {
//   const { id } = req.params;
//   const product = products.find((item) => item.id == id);
//   res.json(product); // INDICAR SIEMPRE QUE ENVIAS UN JSON
// });

//SI QUIERO BUSCAR UN PRODUCTO con un parametro
   //tiene que ir antes del parametro dinamico
  // los search NO estan definidos en la ruta, se pueden editar en el link
  //RUTA?nombre=no&precio=10

app.get("/products/search", (req, res) => {
  const { nombre } = req.query

  const filteredProducts = products.filter((p) => 
    p.nombre.toLowerCase().includes(nombre.toLowerCase())
  );    

  
  res.json(products); // INDICAR SIEMPRE QUE ENVIAS UN JSON
});

//SI ENVÍO MENSAJE DE ERROR -- con parametro dinamico

app.get("/products/:id", (req, res) => {
  const { id } = req.params;  
  const product = products.find((item) => item.id == id);

  if (!product) {
    res.status(404).json({error: "no existe el producto"});
  }
  res.json(product); // INDICAR SIEMPRE QUE ENVIAS UN JSON
});


// ------ POST -----------

// Mostrar un cambio

// app.post("/products", (req, res) => {
//     console.log(req.body);  //--> Parametro que viene en el cuerpo de la petición
//     res.send("POST");
// });

//AGREGAR UN CAMBIO -- crear un Objeto

app.post("/products", (req, res) => {
    const {nombre, precio, cantidad} = req.body //--> Se crea constante

    const newProduct = {
      id: products.length +1,
      nombre,
      precio,
      cantidad
    };                          //--> Se crea un objeto
    
    products.push(newProduct);    //--> Se hace un push del nuevo objeto

    res.status(201).json(newProduct);  //--> retorna un 201 (create), un producto que se creo 
});


// ------ PUT -----------

// Para reemplazar un registro

app.put("/products/:id", (req, res) => {
  
  const productId = parseInt(req.params.id, 10); //--> Id se pasa a un entero
  const productIndex = products.findIndex((p) => p.id === productId); //busca el indice del producto por el Id
                                                                      
    if (productIndex === -1) {
      return res.status(404).json({error: "no existe el producto"}); //Para informar un error
  }

  const {nombre, precio, cantidad} = req.body; //--> Se crea constante

  products [productIndex] = {id: productId, nombre, precio, cantidad}; //--> para reemplazar el elemento
  res.json(products[productIndex]);  //--> respondo con json el producto que modifique
});

// ------ DELETE -----------

// Para borrar

app.delete("/products/:id", (req, res) => {
  
  const productId = parseInt(req.params.id, 10); //--> Id se pasa a un entero
  const productIndex = products.findIndex((p) => p.id === productId); //busca el indice del producto por el Id
                                                                      
    if (productIndex === -1) {
      return res.status(404).json({error: "Producto no encontrado"}); //Para informar un error
  }

  products.splice(productIndex, 1); //--> Quita el elemento

  res.status(204).send(); //--> Informa que se borro el elemento 204=sin contenido
});

// Usar MIDDLEWARE para leer un error -- va al final de todas las peticiones
//Llega la petición pasa por todas las rutas si no detecta nada arroja mensaje de error

app.use((req, res, next) => {
  res.status(404).json({error: "Not Found"}); //--> mensaje de error
});

const PORT = 3000; 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));