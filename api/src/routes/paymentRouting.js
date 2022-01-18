const { Router } = require('express');
const router = Router();

const {
    postPayment,
    allPayments,
    deletePayment,
    putPayment,
} = require("../controllers/paymentController.js");

router.post('/', postPayment);
router.get('/', allPayments);
router.delete('/',deletePayment);
router.put('/',putPayment);

module.exports = router;