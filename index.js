//SERVIDOR //

import express from "express";  
const app = express(); 

//RUTAS

app.get("/ping", (req, res) => {    
  res.send("/pong"); 
});

const PORT = 3000; 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));