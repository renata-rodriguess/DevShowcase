module.exports = (erro, req, res, next) => {
    console.error('Erro:', erro);
    if (erro.name === 'ValidationError') {
        return res.status(400).json({
            erro: 'Dados inválidos',
            detalhes:
                Object.values(erro.errors).map(e => e.message)
        });
    }

    if (erro.name === 'CastError') {
        return res.status(400).json({
            erro: 'Identificador inválido',
            mensagem: `o valor "${erro.value}"
            não é válido para ${erro.path}`
        });
    }
    return res.status(500).json({
        erro: 'Erro interno do servidor'
    });
};