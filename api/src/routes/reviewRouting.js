const { Router } = require("express");
const router = Router();
const {
  postReview,
  updateReview,
  deleteReview,
  allReviews
 } = require("../controllers/reviewController.js");

router.post("/", postReview);
router.put("/", updateReview);
router.delete("/", deleteReview);
router.get("/", allReviews);

module.exports = router;
