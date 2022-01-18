const { Router } = require("express");
const router = Router();

const { getAllSubCategories } = require("../controllers/subCategoryController.js");

router.get("/", getAllSubCategories);

module.exports = router;