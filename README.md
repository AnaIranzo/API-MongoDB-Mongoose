
### EJERCICIO - MongoDB + Mongoose - API REST con Express

1. Crear una colección nueva de Providers y añadirla a nuestra API de back incluyendo Schema y Model en `models/providers.js`. Campos:
	- company_name
	- CIF
	- address
	- url_web
	
2. Modificar el Schema de productos visto en clase para que admita relación entre las colecciones Providers y Products. Modelo de datos normalizado. 

3. Crear varios providers de prueba por consola de MongoDB.

	Ejemplo de objeto Provider:

	```javascript
	{
	    "_id": ObjectId("62b062cff3fa93bf9d66fa06"),
	    "company_name": "Teatro Marquina",
	    "CIF": "B40236882",
	    "address": "Calle de Prim 11",
	    "url_web":"https://www.tortillasmarquina.com"
	}
    ```
4. Crear varios productos de prueba por consola de MongoDB.


Ejemplo de objeto Product
```javascript
	{
	    "_id": ObjectId("62b062cff3fa93bf9d66fa28"),
	    "title": "Tortilla - Marquina",
	    "price": 1.80,
        "description":"La mejor tortilla de la zona en el Teatro Marquina",
	    "provider": ObjectId("62b062cff3fa93bf9d66fa06")
	}
```

6. Crear los siguientes endpoints de la API en el siguiente orden:
	
- [GET] http://localhost:3000/api/products Retorna un objeto con los datos de todos los productos. Retorna un status 200. Usar `populate()` para que traiga los datos del proveedor de cada producto.
- [POST] http://localhost:3000/api/products Se envía por POST los datos del producto a crear y retorna un status 201. Payload `{message: "producto creado",product:{datos_del_producto_creado}`. Primero tendréis que traer los datos del proveedor para obtener el ID_provider. Después se podrá crear el producto.
- [POST] http://localhost:3000/api/providers Se envía por POST los datos del producto a crear y retorna un status 201. Payload `{message: "proveedor creado", product:{datos_del_proveedor_creado}}`.
