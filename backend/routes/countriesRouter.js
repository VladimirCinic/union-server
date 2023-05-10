const express = require('express');
const {countries} = require("../data/data");

const router = express.Router();


router.get('/countries', async (req, res) => {
    res.status(200).json(countries);
});

module.exports = router;
