import Pan from '../models/Pan.js';

export const getPanes = async (req, res) => {
    try {
        const panes = await Pan.find();
        res.json(panes)
        
    } catch (err) {
        console.log(err);
    }
}

export const getPan = async (req, res) => {
    const { id } = req.params;
    try {
        const panById = await Pan.findById(id);
        res.json(panById);
        
    } catch (err) {
        console.log(err);
    }
}

export const postPan = (req, res) => {

    const { nombrePan, descripcion, comentario, ingredientes } = req.body;

    try {
        const newPan = new Pan({nombrePan, descripcion, comentario, ingredientes});
        newPan.save();
        res.json({
            message: 'Pan guardado con exito',
            data: newPan
        });
        
    } catch (err) {
        console.log(err);
    }
}

export const updatePan = async (req, res) => {

    const { id } = req.params;
    const { nombrePan, descripcion, comentario, ingredientes } = req.body;

    try {
        await Pan.findByIdAndUpdate(id, { nombrePan, descripcion, comentario, ingredientes });
        res.json({
            message: 'Pan actualizado con exito',
            data: req.body
        })        
    } catch (err) {
        console.log(err);
    }
}

export const deletePan = async (req, res) => {

    const { id } = req.params;

    try {
        await Pan.findByIdAndDelete(id)
    
        res.json({
            message: 'Pan eliminado con exito',
        })
        
    } catch (err) {
        console.log(err);
    }
    
}