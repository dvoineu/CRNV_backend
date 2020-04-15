const mongoose = require('mongoose');

const CountriesSchema = new mongoose.Schema({
  country_name: String,
  slug: String,
  total_cases: Number,
  new_cases: Number,
  total_deaths: Number,
  // total_deaths: Number,
  new_deaths: Number,
  total_recovered: Number
});

// 'Countries' here is the name of the collection
// module.exports = mongoose.model('Countries', CountriesSchema);
module.exports = mongoose.model('Countries', CountriesSchema);
