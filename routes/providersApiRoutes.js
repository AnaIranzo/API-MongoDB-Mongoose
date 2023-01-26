const express = require('express')
const checkApiKey = require('../middlewares/auth_api_key')
const providersApiController = require('../controllers/providersApiController')
const providersApiRouter = express.Router();

// Rutas de API de productos

// GET http://localhost:3000/api/providers/3
// GET http://localhost:3000/api/providers/4
// GET http://localhost:3000/api/providers
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

// DELETE
//providersApiRouter.delete('/',checkApiKey, providersApiController.deleteProvider);


module.exports = providersApiRouter;
