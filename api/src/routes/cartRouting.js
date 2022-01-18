const { Router } = require("express");
const router = Router();
const {
    postCart,
    allCart,
    deleteCart
 } = require("../controllers/cartController.js");

router.post("/", postCart);
router.get("/", allCart);
router.delete("/", deleteCart);
// router.put("/", updateReview);

module.exports = router;
