const mongoose = require("mongoose");

// Created the Schema for the Exchange List Icon
const exchangeIconSchema = new mongoose.Schema({
    exchange_id:String,
    url: String
},
);

module.exports = mongoose.model('ExchangeIcon', exchangeIconSchema);