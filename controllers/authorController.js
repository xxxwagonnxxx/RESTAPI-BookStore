const { Author, Book } = require("../model/model");

const authorController = {
    // Add Author
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(200).json(savedAuthor);
        } catch (err) {
            res.status(500).json(err); //http request code
        }
    },
    // Get All Author
    getAllAuthors: async (req, res) => {
        try {
            const authors = await Author.find();
            res.status(200).json(authors);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //Get an author
    getAnAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json(err)
        }
    },
    //Update Author
    updateAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id);
            await author.updateOne({ $set: req.body }); //update nhung gi gui len
            res.status(200).json("Update Successfully!");
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //Delete Author
    deleteAuthor: async(req, res) => {
        try {
            await Book.updateMany({ author: req.params.id }, { author: null });
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully!")
         } catch (error) {
            res.status(500).json(error)
         }
    }
}

module.exports = authorController;