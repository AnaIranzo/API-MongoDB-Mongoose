const express = require('express')
const checkApiKey = require('../middlewares/auth_api_key')
const providersApiController = require('../controllers/providersApiController')
const providersApiRouter = express.Router();

// Rutas de API de providers

// GET http://localhost:3000/api/providers/
// GET http://localhost:3000/api/providers/Teatro Marquina
// GET http://localhost:3000/api/providers/Rice
providersApiRouter.get('/:company?',providersApiController.getProviders);

/*Objeto de prueba para crear*/
/*
{
    
    "company_name": "Teatro Marquina",
    "CIF": "B40236882",
    "address": "Calle de Prim 11",
    "url_web":"https://www.tortillasmarquina.com"
}
*/

// POST http://localhost:3000/api/providers?API_KEY=123abc
providersApiRouter.post('/',checkApiKey,providersApiController.createProvider);

//PUT
//http://localhost:3000/api/provider/63d1511aa2244adfe4a35c16?API_KEY=123abc --> _id
providersApiRouter.put('/:id',checkApiKey,providersApiController.editProvider);

// DELETE
//http://localhost:3000/api/providers?API_KEY=123abc
providersApiRouter.delete('/',checkApiKey, providersApiController.deleteProvider);


module.exports = providersApiRouter;
