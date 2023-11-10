const { Book, Author } = require("../model/model");

const bookController = {
    // Add a book
    addABook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if (req.body.author) {
                const author = Author.findById(req.body.author);
                author.updateOne({ $push: { books: savedBook._id } });
            }
            res.status(200).json(savedBook);
        } catch (error) {
            res.status(500).json(err)
        }
    },
    //Get All books
    getAllBooks: async (req, res) => {
        try {
            const allBooks = await Book.find();
            res.status(200).json(allBooks);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //Get a book
    getABook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //Update a book
    updateBook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!")
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //Delete Book
    deleteBook: async (req, res) => {
        try {
            await Author.updateMany(
                { books: req.params.id },
                { $pull: { books: req.params.id } })
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete succesfully");
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

module.exports = bookController;