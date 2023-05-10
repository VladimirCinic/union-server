const express = require('express');
const { users } = require('../data/users');


const router = express.Router();

router.get('/:passportId',async (req, res) => {
    const { passportId } = req.params;
  
    const exists = users.find(item => item.passportId === parseInt(passportId))
    console.log();
  
    if (exists) {
      res.status(200).json({ exists: true });
    }
    if (!exists) {
      res.status(200).json({ exists: false });
    }
  });

module.exports = router;
