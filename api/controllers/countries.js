const Country = require('../models/country')


function indexCountry(req, res) {
    Country.find({}).then(function (countries) {
      res.status(200).json(countries);
    });
  }

  function create(req, res){
    const country = new Country(req.body)
    country.save(function(err){
        if(err){
            throw err
        }
        res.json(country)
    })
}

module.exports = {
    indexCountry,
    create
}