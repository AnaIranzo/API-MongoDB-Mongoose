// Controlador - Lógica de negocio de la app
// controller products mongodb
//importar model
const Provider = require('../models/providers')

const getProviders = async (req,res) => {
    if (req.params.company) { // con company
        try {
            
            let provider = await Provider.find({company_name: req.params.company},'-_id -__v'); // find({})devuelve por id menos los especificados despues de la coma (proyeccion)
            //let products = await Provider.find({}, {"_id" : 0,"__v":0}); // otra manera con 0 le indicamos que no lo muestre 1 que si
            if (provider.length > 0){
                res.status(200).json(provider[0]); // Respuesta de la API para 1 proveedor, no un array de objetos
            }else{
                res.status(404).json({msj: "proveedor no encontrado con ID"  + req.params.company});
            }
            
        }
        catch (err) {
        
            res.status(400).json({
                msj: err.message
        });
        }
    } else { // sin ID --> TODOS los providers
        try {
            
            
        let providers = await Provider.find({},'-_id -__v'); // find({})devuelve todos
            res.status(200).json(providers); // Respuesta de la API para todos productos
        }
        catch (err) {
        
            res.status(400).json({
                msj: err.message
        });
        }
    }
}

const createProvider = async (req,res) => {
    console.log("Esto es el console.log de lo que introducimos por thunderclient", req.body); // Objeto recibido de producto nuevo
    const newProvider = req.body; // {} nuevo producto a guardar

    try{
        // para guardar en una BBDD MongoDB
        let response = await new Provider(newProvider)//llamada asincrona a la bbdd 

        let answer = await response.save(); // objeto de vuelta de la petición de guardar en la bbdd, confirmas que se guarda
        console.log("Este es el console.log de lo que devuelve la api", answer);

        res.status(201).json({
            msj: `Proveedor ${answer.company_name} guardado en el sistema con ID: ${answer._id}`,
        "proveedor": answer
    });
    }catch(err){
        console.log("Este es el error que devuelve la api", err.message);
        res.status(400).json({
            msj: err.message
    });
    }
    
}


const editProvider = async (req, res) => {
    if (req.params.id) {
    // con _id --> title no funciona
    console.log(req.params.id);
    try {
        /*  var conditions = {title: req.params.title};
            Product.updateOne(conditions, req.body)
            .then(doc => {
                if(!doc){return res.status(404).end();}
                return res.status(200).json(doc)
                }) */
        const filter = { _id: req.params.id };
        const update = { company_name: req.body.company_name,
                        CIF: req.body.CIF,
                        address: req.body.address,
                        url_web: req.body.url_web,                                      };

        const doc = await Provider.findOneAndUpdate(filter, update);
        let response = await doc.save();
        res.status(200).json({
            msj: "Proveedor actualizado " + response._id,
        });
    } catch (err) {
        res.status(400).json({
            msj: err.message,
        });
    }
    } else {
    res.status(400).json({
        msj: "Es necesario introducir el ID del proveedor para actualizarlo",
    });
    }
}; 

const deleteProvider = async (req,res)=>{
    Provider.findOneAndDelete({_id: req.body.id }, function (err, docs) {
      if (err){
        res.status(400).json({
            msj: err.message,
        });
      }
      else{
        res.status(200).json({
            msj: "Proveedor borrado : "+ docs,
        });
          
      }
  });
  } 





module.exports = {
    getProviders,
    createProvider,
    editProvider,
    deleteProvider
    
    
}

