const express = require('express');
const {countries} = require("../data/data");


const router = express.Router();

router.post('/', async (req, res) => {
    let freePass;
    let forbiddenPass;
    const user  = req.body;
    // let response;
    console.log(user);
    const country = countries.find(country => country.code === user.selectedCountry)
    if(country.pass === 'paid'){
        freePass = false
        res.status(200).json({freePass})
    }

    if(country.pass === 'free'){
        freePass = true
        response = 'You are free to enter the state'
        res.status(200).json({freePass})
    }

    if(country.pass === 'forbidden'){
        forbiddenPass=true
        res.status(200).json({forbiddenPass})
    }
});



module.exports = router;
