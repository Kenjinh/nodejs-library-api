const user = require('../models/UserModel');

class UserController {
    async store(req, res) {
        try{
            const data = await user.create(req.body);

            return res.json(data);

        }catch(err){
            return res.json(err);
        }
    }

    async index(req, res) {
        let data = await user.find({});
        data = data.map(item => {
            return {
                id: item._id,
                name: item.name,
                email: item.email,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
            }
        });

        return res.json(data);
    }

    async delete(req, res) {
        const data = await user.findByIdAndDelete(req.params.id);
        return res.json(data);
    }

    async update(req, res) {
        const data = await user.findByIdAndUpdate(req.params.id, req.body);
        return res.json(data);
    }
}

module.exports = new UserController();