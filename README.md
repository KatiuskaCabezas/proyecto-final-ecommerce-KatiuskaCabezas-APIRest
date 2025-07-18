# API Rest en Node.js

## Descripción
Creación de una API Rest con Node.js y Express junto a Firestore.

## Instalación

1. Clonar el repositorio.
2. Instalar dependencias.

```shell
npm install
```
3. Configurar variables de entorno:

```shell
# Copiar el archivo del ejemplo y completar con los datos requeridos
cp .env.example .env
```
Editar el archivo `.env` con los datos correspondientes para el entorno.

4. Ejecutar en modo Desarrollo:

```shell
npm rum dev
```
## Documentación de la API

### SI QUIERO MOSTRAR LISTA DE PRODUCTOS

- **GET** `/api/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Ejemplo de Respuesta:** 

```json
[
    {
        "id": "6hAeud92cfujluN0tQw6",
        "price": 300,
        "name": "short deportivo",
        "categories": [
            "ropa",
            "deporte"
        ]
    },
    {
        "id": "A0O8VwwhQ4ThKl1Flz24",
        "categories": [
            "zapatillas",
            "deporte"
        ],
        "name": "zapatos running",
        "price": 200
    },
    {
        "id": "etyrgIYkFleuV96X7sgy",
        "categories": [
            "ropa",
            "deporte"
        ],
        "price": 100,
        "name": "camiseta deportiva"
    }
]
```

### SI QUIERO BUSCAR UN PRODUCTO POR NOMBRE

- **GET** `/api/products/search?name=palabra`
- **Descripción:** Devuelve los productos si el nombre contiene la palabra que se indica.
- **Parámetro:**
     `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de Uso:** `/api/products/search?name=zapatos`
- **Ejemplo de Respuesta:** 
```json
[    {
        "id": "A0O8VwwhQ4ThKl1Flz24",
        "categories": [
            "zapatillas",
            "deporte"
        ],
        "name": "zapatos running",
        "price": 200
    },
]
```

POST

{
    "id": "k62YqNupqQXpca6Vlu6W",
    "name": "sofa",
    "price": 500000,
    "categories": "hogar"
}

