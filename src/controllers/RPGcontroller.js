import dados from "../models/dados.js"
const { sistemas } = dados;

const getAllSistemas = (req, res) => {
    let resultado = sistemas

    //Filtros AQUI!

    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
}

const getSistemasById = (req, res) => {
    const id = parseInt(req.params.id);
    const sistema = sistemas.find(m => m.id === id);

    if (!sistema) {
        res.status(404).json({
            success: false,
            message: `sistema not found, ${id}`
        })
    }

    res.status(200).json({
        total: sistema.length,
        data: sistema
    })
}