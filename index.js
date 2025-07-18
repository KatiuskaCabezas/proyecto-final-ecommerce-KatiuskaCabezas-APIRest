import "dotenv/config";
import express from "express"; // --> Importar express
import cors from "cors";  // --> Importar cors 
const app = express();

// Usar MIDDLEWARE para poder leer el cambio con POST -- va antes de las peticiones
//Llega la petición el middleware detecta si tiene un cuerpo, lo trasnforma para ser leída

app.use(cors());   //--> usar cors

app.use(express.json());  //--> usar express

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API-REST" });
});

import productsRouter from './src/routes/products.router.js'
app.use("/api", productsRouter);

import authRouter from "./src/routes/auth.routes.js";
app.use(authRouter);


// Usar MIDDLEWARE para leer un error -- va al final de todas las peticiones
//Llega la petición pasa por todas las rutas si no detecta nada arroja mensaje de error

app.use((req, res, next) => {
  res.status(404).json({error: "Not Found"}); //--> mensaje de error
});

//puerto
const PORT = process.env.PORT || 3001; 

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));