const Project = require('../models/Project');
const projectRepo = require('../repositories/ProjectRepository');
exports.create = async (req, res) => {
    try {
        const { nome, titulo, descricao, linkRepositorio, tecnologias } = req.body;

        if (!nome) {
            return res.status(400).json({ erro: 'Nome é obrigatório' });
        }
        const project = await
            Project.create({
                nome,
                titulo,
                descricao: descricao || '',
                linkRepositorio,
                tecnologias
            });
        return res.status(201).json(project);
    } catch (err) {
        return res.status(500).json({
            erro: err.message
        });
    }
};
exports.getALL = async (req, res) => {
    try {
        const { tecnologia, page = 1, limit = 10 } = req.query;
        const filtro = {};
        if (tecnologia) {
            filtro['tecnologias.nome'] = tecnologia;
        }
        const pular = (Number(page) - 1) * Number(limit);
        const projetos = await
            Project.find(filtro)
                .populate('perfil', 'nome biografia')
                .populate('tecnologias', 'nome')
                .skip(pular)
                .limit(Number(limit))
                .sort({ createdAt: -1 });
        const total = await
            Project.countDocuments(filtro);
        return res.json({
            dados: projetos,
            pagina: Number(page),
            limite: Number(limit),
            total,
            totalPaginas: Math.ceil(total / Number(limit))
        });
    } catch (err) {
        console.log('ERRO DETALHADO:', err.message);
        console.log(err);
        return res.status(500).json({ erro: 'Erro ao listar projetos', mensagem: err.message });
    }
};
exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const projeto = await
            Project.findById(id)
                .populate('perfil', 'nome biografia')
                .populate('tecnologias', 'nome')
                .populate('feedbacks');
        if (!projeto) {
            return res.status(404).json({ erro: 'Projeto não encontrado' });
        }
        return res.json(projeto);
    } catch (err) {
        return res.status(500).json({ erro: 'Erro ao buscar projeto' });
    }
};
exports.curtir = async (req, res) => {
    try {
        const { id } = req.params;
        const projeto = await
            Project.findById(id);

        if (!projeto) {
            return res.status(404).json({ erro: 'Projeto não encontrado' });
        }
        projeto.curtidas = (projeto.curtidas || 0) + 1;
        await projeto.save();

        return res.json({ curtidas: projeto.curtidas });
    } catch (err) {
        return res.status(500).json({ erro: 'Erro ao curtir' });
    }
};