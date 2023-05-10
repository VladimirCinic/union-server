const asyncHandler = require('express-async-handler');
const {unionStates} = require("../data/data");




const getCountries = asyncHandler(async (req, res) => {
    res.status(200).json({ data: unionStates });
});


module.exports = {
getCountries
};
