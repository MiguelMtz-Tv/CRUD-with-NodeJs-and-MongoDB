const mongoose = require('mongoose');
const {Schema} = mongoose;
//creamos el modelo
const taskSchema = new Schema({
        contenido: String,
        estado: Boolean
});


//exportamos el modelo (Schema)
module.exports = mongoose.model('Task', taskSchema);