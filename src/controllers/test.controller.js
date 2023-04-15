

exports.test = async (req, res) => {
    try {
    
    
    res.status(200).json({ data: 'conexion conectado al front'}) 
        
    } catch (error) {
       console.log(error);
       return res.status(500).send('Error en el servidor') 
    }
}
    