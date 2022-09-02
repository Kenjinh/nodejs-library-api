const book = require('../models/BookModel');

class BookController {
    async store(req, res) {
        try{
            const data = await book.create(req.body);

            return res.json(data);
            
        }catch(err){
            return res.json(err);
        }
    }
    
    async index(req, res) {
        let data = await book.find({});

        return res.json(data);
    }

    async delete(req, res) {
        const data = await book.findByIdAndDelete(req.params.id);
        return res.json(data);
    }

    async update(req, res) {
        const data = await book.findByIdAndUpdate(req.params.id, req.body);
        return res.json(data);
    }
}

module.exports = new BookController();