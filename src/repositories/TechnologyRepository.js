const Technology = require('../models/Technology');

class TechnologyRepository {
    async create(data) {
        const tech = new Technology(data);
        return await tech.save();
    }
    async findAll() {
        return await
            Technology.find().sort({ nome: 1 });
    }
}
module.exports = new TechnologyRepository();