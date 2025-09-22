const sistemas = [
    {
        id: 1,
        sistema: "Dungeons & Dragons 5e",
        cenario: "Forgotten Realms: O Legado do Rei Lich",
        mestre: "Alexandre",
        jogadores: ["Sofia", "Marcelo", "Larissa", "Gustavo"],
        nivel: 5,
        sessoes: 12,
        proximaData: "05/10/2025 20:00",
        // Alterado de 'ativo: true' para 'status: "ativo"'
        status: "ativo"
    },
    {
        id: 2,
        sistema: "Ordem Paranormal RPG",
        cenario: "A Mansão Silenciosa",
        mestre: "Beatriz",
        jogadores: ["Pedro", "Juliana", "Rafael"],
        nivel: 3,
        sessoes: 8,
        proximaData: "01/10/2025 19:30",
        // Alterado de 'ativo: true' para 'status: "ativo"'
        status: "ativo"
    },
    {
        id: 3,
        sistema: "Chamado de Cthulhu",
        cenario: "Mundo das Trevas: O Culto do Mar Profundo",
        mestre: "Carlos",
        jogadores: ["Fernanda", "Ricardo"],
        nivel: 1, // Nível em Cthulhu é menos relevante, usei 1 como padrão
        sessoes: 4,
        proximaData: "15/09/2025 21:00",
        // Alterado de 'ativo: false' para 'status: "finalizado"'
        status: "finalizado"
    },
    {
        id: 4,
        sistema: "Tormenta 20",
        cenario: "Arcádia: A Busca pela Joia de Kallyadranoch",
        mestre: "Diana",
        jogadores: ["Lucas", "Camila", "Bruno", "Patrícia"],
        nivel: 7,
        sessoes: 25,
        proximaData: "12/10/2025 20:30",
        // Alterado de 'ativo: true' para 'status: "ativo"'
        status: "ativo"
    },
    {
        id: 5,
        sistema: "Storyteller (Vampiro: A Máscara)",
        cenario: "Crônicas da Cidade Noturna",
        mestre: "Eduardo",
        jogadores: ["Mariana", "Thiago"],
        nivel: 2, // Representação simplificada de "nível"
        sessoes: 18,
        proximaData: "29/09/2025 22:00",
        // Alterado de 'ativo: true' para 'status: "ativo"'
        status: "ativo"
    }
];

export default { sistemas };