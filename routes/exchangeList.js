const express = require("express");
const router = express.Router();
const { getExhchangeData, postExchangeData } = require("../controllers/exchangeController")


router.route("/").get(getExhchangeData).post(postExchangeData);

module.exports = router;
