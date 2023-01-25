//productos para bbdd mongodb

const mongoose = require('mongoose');


const objectSchema = {
    
    company_name: { 
        type: String, 
        required: true ,
        
    },
    CIF: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String,
        validate: {// validacion si va bien devuelve true, si no false 
            validator: function(url){
                if(url.indexOf('.com') != -1 || url.indexOf('.es') != -1)
                    return true;
                else {
                    return false;
                }
            }, 
            message: "Porfa, sólo webs .com o .es"
        }
    }
};
// Crear el esquema
const providersSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Provider = mongoose.model('Providers', providersSchema);//creo una coleccion nueva en mongo que se llama Providers importante mayuscula

module.exports = Provider;


// Insertar un provider
/* const p = new Provider({
    
    "company_name": "Teatro Marquina",
    "CIF": "B40236882",
    "address": "Calle de Prim 11",
    "url_web":"https://www.tortillasmarquina.com"
});

p.save().then((data)=>console.log(data)); 

db.providers.insertOne({
    
    "company_name": "Rocafría",
    "CIF": "B40236883",
    "address": "Calle del Barquillo 20",
    "url_web":"https://www.rocafria.com"
})


*/
