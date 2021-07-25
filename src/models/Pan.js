import pkg from 'mongoose';
const { Schema, model } = pkg;

const PanSchema = new Schema({
    nombrePan: String,
    descripcion: String,
    comentario: String,
    imgPortada: String,
    imgResultado: String,
    ingredientes: [
        {
            nombre: String,
            medida: String,
            marca: String
        }
    ]
}, { timestamps: true })

const Pan = model('Pan', PanSchema);

export default Pan;