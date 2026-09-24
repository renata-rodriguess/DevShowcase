const Profile = require('../models/Profile');

class ProfileRepository {
    async create(data) {
        const profile = new Profile(data);
        return await profile.save();
    }
    async findAll() {
        return await Profile.find();
    }
    async findById(id) {
        return await Profile.findById(id);
    }
}

module.exports = new ProfileRepository();
