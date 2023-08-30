const Exchange = require("../models/exchangeModel");


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
    try {
        const jsonData = req.body;

        // Check for the Existing Data using the unique exchange_id
        const existingExchangeListData = await Exchange.findOne({ exchange_id: req.body.exchange_id });
        if (existingExchangeListData) {
            return res.status(400).json({ message: 'Data already exists in the database.' });
        }

        // Logic to save the data to db.
        const newExchangeListData = new Exchange(jsonData);
        await newExchangeListData.save();

        res.status(200).json({ message: "Data saved successfully." });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getExchangeData,
    postExchangeData
};
