const express = require('express');
const { processPayment, paymentSuccess, paymentFailure } = require('../controllers/paymentController');

const router = express.Router();

router.post('/process', processPayment);
router.get('/success', paymentSuccess);
router.get('/failure', paymentFailure);

module.exports = router;