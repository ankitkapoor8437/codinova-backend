const express = require("express");
const router = express.Router();
const { getExchangeIcon, postExchangeIcon } = require("../controllers/exchangeIconController")

// Created the Common Routes for both get and post 
router.route("/").get(getExchangeIcon).post(postExchangeIcon);

module.exports = router;