const ExchangeData = require("../models/exchangeDataModel");


// Get Module
const getExchangeData = async (req, res) => {
    try {
        // Logic to fetch the data from DB.
        const exchangeListData = await ExchangeData.find().limit(20);

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
        const exchangeDataArray = req.body.payload.Data;
        for (const element of exchangeDataArray) {
            const data = new ExchangeData(element);
            await data.save();
        }
        res.status(200).json({ message: 'Exchange data saved successfully' });
    } catch (error) {
        console.error('Error saving exchange data:', error);
        res.status(500).json({ error: 'An error occurred while saving exchange data' });
    }


    // const exchangeDataArray = req.body.payload.Data;
    // exchangeDataArray.forEach(element => {
    //     const data = new ExchangeData(element);
    //     data.save()
    // });
    // return null
};


module.exports = {
    getExchangeData,
    postExchangeData
};
