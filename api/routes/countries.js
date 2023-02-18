const express = require('express');
const router = express.Router();

const countryCtrl = require('../controllers/countries')


router.get('/', countryCtrl.indexCountry)
router.post('/', countryCtrl.create)

module.exports = router;