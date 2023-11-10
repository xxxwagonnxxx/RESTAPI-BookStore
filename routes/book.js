const bookController = require('../controllers/bookController');

const router = require('express').Router();

//Add a book
router.post("/", bookController.addABook);
//Get all book
router.get("/", bookController.getAllBooks);
//Get a book
router.get(":id", bookController.getABook);
//Update a book
router.put("/:id", bookController.updateBook);
//Delete a book
router.delete("/:id", bookController.deleteBook);


module.exports = router;