const express = require("express");
const router = express.Router();

const Book = require("../controllers/BookController");

router.get("/", Book.index);

router.post("/register", Book.store);

router.put("/edit/:id", Book.update);

router.delete("/delete/:id", Book.delete);

module.exports = router;
