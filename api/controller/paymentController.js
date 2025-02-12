const axios = require('axios');

exports.processPayment = async (req, res) => {
  const { amount, referenceId, customerName, email } = req.body;

  try {
    const response = await axios.post('https://esewa.com.np/epay/main', {
      amt: amount,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: amount,
      pid: referenceId,
      scd: process.env.ESEWA_MERCHANT_ID,
      su: `${process.env.BASE_URL}/api/payments/success`,
      fu: `${process.env.BASE_URL}/api/payments/failure`,
    });

    res.status(200).json({ message: 'Payment processed successfully', data: response.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.paymentSuccess = (req, res) => {
  res.status(200).json({ message: 'Payment successful' });
};

exports.paymentFailure = (req, res) => {
  res.status(400).json({ message: 'Payment failed' });
};