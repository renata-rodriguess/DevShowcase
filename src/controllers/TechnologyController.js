const techRepo = require('../repositories/TechnologyRepository');
const { TechnologyDTO } = require('../dto/TechnologyDTO');
exports.creat = async (req, res) => {
    try {
        const { error, value } =
            TechnologyDTO.validate(req.body);
        if (error) {
            return
            res.status(400).json({ erro: error.message });
        }
        const tech = await
            techRepo.create(value);
        return
        res.status(201).json(tech);
    } catch (err) {
        return res.status(500).json({
            erro: err?.message || 'Erro interno no servidor'
        });
    }
};
exports.getALL = async (req, res) => {
    try {
        const techs = await
            techRepo.findAll();
        return res.json(techs);
    } catch (err) {
        return res.status(500).json({ erro: err?.message || 'Erro interno' });
    }
};
