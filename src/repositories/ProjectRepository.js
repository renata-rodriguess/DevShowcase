const Project = require('../models/Project');

class ProjectRepository {
    async create(data) {
        const project = new Project(data);
        return await project.save();
    }
    async findAll() {
        return await Project.find()
            .populate('perfil', 'nome')
            .populate('tecnologias', 'nome');
    }
    async findById(id) {
        return await Project.findById(id);
    }
    async update(id, data) {
        return await
            Project.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id) {
        return await
            Project.findByIdAndDelete(id);
    }
}
module.exports = new ProjectRepository();