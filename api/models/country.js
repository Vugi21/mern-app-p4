const mongoose = require('mongoose');
const {MongoClient} = require('mongodb')
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    // name: {
    //     official: { type: String }
    // },
    name: String,
    capital: String,
    population: Number,
    region: String,
    interestingFacts: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Country', countrySchema);