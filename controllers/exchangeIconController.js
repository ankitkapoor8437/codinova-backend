const ExchangeIcon = require("../models/exchangeIconModel");


// Get Module
const getExchangeIcon = async (req, res) => {
    try {
        // Logic to fetch the data from DB.
        const exchangeListData = await ExchangeIcon.find();

        // Check to see if the data is there in the DB or not.
        if (exchangeListData.length > 0) {
            res.status(200).json(exchangeListData);
        } else {
            res.status(404).json({ message: "Data not found." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Post Module
const postExchangeIcon = async (req, res) => {
    const exchangeDataArray = req.body.payload.Data;
    exchangeDataArray.forEach(element => {
        const icon = new ExchangeIcon(element);
        icon.save()
    });
    // return null
};


module.exports = {
    getExchangeIcon,
    postExchangeIcon
};
