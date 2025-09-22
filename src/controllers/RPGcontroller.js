import dados from "../models/dados.js"
const { sistemas } = dados;

const getAllSistemas = (req, res) => {
    let resultado = sistemas
 const { sistema, mestre, nivel, status } = req.query;

    if (sistema) {
        resultado = resultado.filter(s => 
            s.cenario.toLowerCase().includes(sistema.toLowerCase())
        );
    }

    if (mestre) {
        resultado = resultado.filter(s => 
            s.mestre.toLowerCase().includes(mestre.toLowerCase())
        );
    }

    if (nivel) {
        resultado = resultado.filter(s => 
            s.nivel == parseInt(nivel)
        );
    }

    if (status) {
        resultado = resultado.filter(s => 
            s.status.toLowerCase().includes(status.toLowerCase())
        );
    }


    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
};

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
};

const createSistema = (req, res) => {
    const { sistema, cenario, mestre, jogadores, nivel, sessoes, proximaData } = req.body;

    const tiposSistemas = ["Dungeons & Dragons 5e", "Ordem Paranormal RPG", "Chamado de Cthulhu", "Tormenta 20", "Storyteller (Vampiro: A Máscara)" ]

    if (!cenario) {
        return res.status(400).json({
            success: false,
            message: "O campo 'cenario' é obrigatório"
        });
    }

      if (!mestre) {
        return res.status(400).json({
            success: false,
            message: "O campo 'mestre' é obrigatório e deve ser preenchido com seu devido nome"
        });
    }

    if (!jogadores) {
        return res.status(400).json({
            success: false,
            message: "O campo 'jogadores' deve ser preenchido"
        });
    }

    if (!nivel) {
        return res.status(400).json({
            success: false,
            message: "O campo 'nivel' deve ser preenchido"
        });
    }

    if (!sessoes) {
        return res.status(400).json({
            success: false,
            message: "O campo 'sessoes' deve ser preenchido"
        });
    }

    if (!proximaData) {
        return res.status(400).json({
            success: false,
            message: "O campo 'próxima data' deve ser preenchido"
        });
    }

        //Criar a monster high

    const novoSistema = {
        id: sistema.length + 1,
        cenario: cenario,
        mestre,
        jogadores,
        nivel,
        sessoes,
        proximaData: new Date(),

    }

    sistemas.push(novoSistema);

    res.status(201).json({
        success: true,
        message: "Nova Monstro Cadastrada com sucesso",
        data: novaMonster
    })

};

const deleteSistema = (req, res) => {
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        });
    }

    const idParaApagar = parseInt(id);

    const sistemaParaRemover = sistemas.find(m => m.id === idParaApagar);
    console.log(sistemaParaRemover);

    if (sistemaParaRemover) {
        return res.status(404).json({
            success: false,
            message: "Id nao encontrado."
        });
    }

    const sistemaFiltrado = sistemas.filter(m => m.id !== id);
    console.log(sistemaFiltrado)

    sistemas.splice(0, sistemas.length, ...sistemaFiltrado);

    return res.status(200).json({
        success: true,
        message: "O sistema foi removido com sucesso!"
    })

};

const updateSistema = (req, res) => {
    const id = parseInt(req.params.id);
    const { sistema, cenario, mestre, jogadores, nivel, sessoes, proximaData } = req.body;

    const tiposSistemas = ["Dungeons & Dragons 5e", "Ordem Paranormal RPG", "Chamado de Cthulhu", "Tormenta 20", "Storyteller (Vampiro: A Máscara)" ]

    if (isNaN(id)){
        return res.status(400).json({
            succes: false,
            message: "O id deve ser válido"
        });
    }

    const sistemaExiste = sistemas.find(m => m.id === id)

    if (!sistemaExiste) {
        return res.status(404).json({
            success: false,
            message: "sistema nao existe"
        });
    }

    if (jogadores < 2) {
        return res.status(400).json({
            success: false,
            message: "O numero de jogadores deve ser igual ou superior a 2."
        })
    } 

        if (jogadores > 8) {
        return res.status(400).json({
            success: false,
            message: "O numero de jogadores deve ser igual ou inferior a 8."
        })
    } 

        if (nivel > 20) {
        return res.status(400).json({
            success: false,
            message: "O numero de jogadores deve ser igual ou inferior a 20."
        })
    } 

        const monsterAtualizados = sistemas.map(monster =>
        sistema.id === id
            ? {
                ...sistema,
                ...(sistema && { sistema }),
                ...(cenario && { cenario }),
                ...(mestre && { mestre }),
                ...(jogadores && { jogadores }),
                ...(nivel && { nivel }),
                ...(sessoes && { sessoes }),
            }
            : sistema

        );

                sistemas.splice(0, sistemas.length, ...sistemasAtualizados);

    const sistemasAtualizados = sistemas.find(m => m.id === id);

    res.status(200).json({
        success: true,
        message: "sistema atualizado com sucesso",
        monstro: sistemasAtualizados
    })

};


export { getAllSistemas, getSistemasById, createSistema, deleteSistema, updateSistema }