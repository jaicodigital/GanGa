const { Router } = require("express");
const router = Router();

const { getAllCategories, postCategory } = require("../controllers/categoryController.js");

router.get("/", getAllCategories);
router.post("/", postCategory);

module.exports = router;
