const express = require("express");
const router = express.Router();

const User = require("../controllers/UserController");

router.get("/", User.index);

router.post("/register", User.store);

router.put("/edit/:id", User.update);

router.delete("/delete/:id", User.delete);

module.exports = router;
