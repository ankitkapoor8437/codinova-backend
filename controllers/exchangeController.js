const getExhchangeData = (async (req, res) => {
    try {
        res.status(200).json({ message: "Get route is working!!" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

const postExchangeData = (async (req, res) => {
    try {
        res.status(200).json({ message: "Post route is working!!" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


module.exports = {
    getExhchangeData,
    postExchangeData
}