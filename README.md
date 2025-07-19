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
5. ## Documentación de la API

### Si quiero mostrar lista de productos

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

### Si quiero buscar un producto por nombre

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

### Si quiero buscar un producto por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto por el ID indicado.
- **Parámetro:**
     `id` (path, requerido): ID del producto.
- **Ejemplo de Uso:** `api/products/6hAeud92cfujluN0tQw6`
- **Ejemplo de Respuesta:** 
```json
{
    "id": "6hAeud92cfujluN0tQw6",
    "categories": [
        "ropa",
        "deporte"
    ],
    "name": "short deportivo",
    "price": 300
}
```

### Si quiero crear un producto

- **POST** `api/products`
- **Descripción:** Crea un nuevo producto.
- **Parámetro:**
     - Tener Autorización.
     - Tener token de seguridad.
- **Body (JSON):**

```json
{
        "price": 3000,
        "categories": "jardín",
        "name": "Pino"
    }
```
- **Ejemplo de Respuesta:**
```json
{
    "id": "LCqwOHULmNGqSLKrsy2Q",
    "name": "Pino",
    "price": 3000,
    "categories": "jardín"
}
```

### Si quiero borrar un producto

- **DELETE** `/products/:id`
- **Descripción:** Borra un producto seleccionado.
- **Parámetro:**
     `id` (path, requerido): ID del producto que se quiere borrar.
- **Ejemplo de Uso:** `api/products/6`
- **Ejemplo de Respuesta:** Al buscar el ID en la lista de producto, el mismo no está
```json
1
```

6. Visualizar API por vercel
https://proyecto-final-ecommerce-katiuska-c.vercel.app/
