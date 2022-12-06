const mongoose = require('mongoose')
const Schema = mongoose.Schema

let envioSchema = new Schema({
    fecha:{
        type: Date,
        require: true
    },
    estado:{
        type: String,
        require: true
    },
    ciudad_entrega:{
        type: String,
        require: true
    },
    dir_entrega:{
        type: String,
        require:true
    },
     ciudad_recogida:{
        type: String,
        require:true
    },
    dir_recogida:{
        type: String,
        require:true
    },
    nombre:{
        type: String,
        require:true
    },
    cedula:{
        type: Number,
        require:true
    },
    userId: {
        // type: Schema.Types.ObjectId, ref: 'User'
        type: String
    }
},{
    collection: 'envios'
})

module.exports = mongoose.model('Envio',envioSchema)
