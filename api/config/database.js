// const mongoose = require('mongoose');

// mongoose.connect(
//   'mongodb://localhost:27017/puppies',
//   { useNewUrlParser: true, 
//     //useCreateIndex: true 
// }
// );

// const db = mongoose.connection;

// db.on('connected', function() {
//   console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
// });
const { MongoClient } = require('mongodb');
const fetch = require('node-fetch');
const mongoose = require('mongoose');

mongoose.connect(`${process.env.DATABASE_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});
	
// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

const client = new MongoClient(`${process.env.DATABASE_URL}`);

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const collection = client.db('test').collection('countries');

    // const response = await fetch('https://restcountries.com/v3.1/all');
    // const data = await response.json();

    // const newCountries = data.slice(0,10).map((country, idx) => {
    //   return{
    //     name: country.name.official,
    //     capital: country.capital,
    //     population: country.population,
    //     region: country.region
    //   }
  
    // })


    // const result = await collection.insertMany(newCountries);

    // console.log(`${result.insertedCount} documents were inserted into the collection`);
  } catch (e) {
    console.error(e);
  } finally {
    // await client.close();
    // console.log('Disconnected from MongoDB Atlas');
  }
}

main().catch(console.error);
