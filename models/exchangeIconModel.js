const mongoose = require("mongoose");

// Created the Schema for the Exchange List Data
const exchangeIconSchema = new mongoose.Schema({
    exchange_id:String,
    url: String
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('ExchangeIcon', exchangeIconSchema);