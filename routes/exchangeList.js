const express = require("express");
const router = express.Router();
const { getExchangeData, postExchangeData } = require("../controllers/exchangeController")

// Created the Common Routes for both get and post 
router.route("/").get(getExchangeData).post(postExchangeData);

module.exports = router;
