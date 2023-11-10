const authorController = require("../controllers/authorController");

const router = require("express").Router();

//Add author
router.post("/", authorController.addAuthor);
//Get all author
router.get("/", authorController.getAllAuthors);
//Get An Author
router.get("/:id", authorController.getAnAuthor);
//Update Author
router.put("/:id", authorController.updateAuthor);
//Delete Author
router.delete("/:id", authorController.deleteAuthor);
module.exports = router;