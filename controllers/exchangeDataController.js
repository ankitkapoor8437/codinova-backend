const Exchange = require("../models/exchangeDataModel");


// Get Module
const getExchangeData = async (req, res) => {
    try {
        // Logic to fetch the data from DB.
        const exchangeListData = await Exchange.find();

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
const postExchangeData = async (req, res) => {
    const exchangeDataArray = req.body.payload.Data;
    exchangeDataArray.forEach(element => {
        const data = new ExchangeData(element);
        data.save()
    });
    // return null
};


module.exports = {
    getExchangeData,
    postExchangeData
};
