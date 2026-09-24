const { Profile } = require('../models/Profile');
const profileRepo = require('../repositories/ProfileRepository');
exports.create = async (req, res) => {
    try {
        const { error, value } = require('../dto/ProfileDTO').validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(400).json({ erro: error.message });
        }
        const profile = await
            profileRepo.create(value);
        return res.status(201).json({
            mensagem: 'Perfil criado com sucesso!',
            dados: {
                _id: profile._id.toString(),
                nome: profile.nome,
                biografia: profile.biografia,
                email: profile.email,
                usuarioGithub: profile.usuarioGithub,
                tecnologias: profile.tecnologias || [],
                createdAt: profile.createdAt
            }
        });
    } catch (err) {
        return res.status(500).json({
            erro:
                'Erro interno', detalhes: err.message
        });
    }
};
exports.getById = async (req, res) => {
    try {
        const perfil = await
            profileRepo.findById(req.params.id);
        if (!perfil) {
            return res.status(404).json({ erro: 'Perfil não encontrado' });
        }
        return res.status(200).json({
            mensagem: 'Perfil encontrado!',
            dados: {
                _id: perfil._id.toString(),
                nome: perfil.nome,
                biografia: perfil.biografia,
                email: perfil.email,
                usuarioGithub: perfil.usuarioGithub,
                tecnologias: perfil.tecnologias || [],
                createdAt: perfil.createdAt
            }
        });
    } catch (err) {
        return res.status(500).json({
            erro: 'Erro interno',
            detalhes: err.message
        });
    }
};
