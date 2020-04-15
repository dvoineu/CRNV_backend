const Countries = require('../models/Countries');

// @desc     Get all all COVID-19 data by countries
// @route    GET /api/v1/countries
// @access   Public
exports.getCountries = async (req, res, next) => {
  try {
    const countries = await Countries.find();
    // countries.total_cases.replace(',', '');
    // countries.total_cases = '';
    // use select('field_name') to show only reult with this field
    // const countries = await Countries.find().select('country_name');
    // res.status(200).json({ success: true, data: countries });
    // for (country in countries) {
    //   parseInt(country.total_deaths.replace(',', ''));
    // }
    res.status(200).json(countries);
    // let int = parseInt(countries[0].total_deaths.replace(',', ''));
    // console.log(parseInt(countries[0].total_deaths.replace(',', '')));
    // console.log(typeof int);
    // let int2 = countries[0].total_deaths;
    // console.log(countries[0].total_deaths);
    // console.log(typeof int2);
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc     Get single country for COVID-19 data
// @route    GET /api/v1/countries/country/:country_name
// @access   Public
exports.getCountry = async (req, res, next) => {
  const country = await Countries.findOne({
    country_name: req.params.country_name
  });
  console.log(req.params.country_name);
  console.log(country.new_deaths);
  res.status(200).json({ success: true, data: country });
};

// @desc     Get total deaths from COVID-19
// @route    GET /api/v1/countries/total-deaths
// @access   Public
exports.getTotalDeaths = async (req, res, next) => {
  try {
    const countries = await Countries.find().select('total_deaths');
    let total = 0;
    for (i in countries) {
      // let formatted_str = countries[i].total_deaths;
      // if (formatted_str === '') {
      //   formatted_str = 0;
      // }
      total += countries[i].total_deaths;
      console.log(total);
    }
    res.status(200).json({ success: true, total_deaths: total });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc     Get total confirmed cases from COVID-19
// @route    GET /api/v1/countries/total-confirmed
// @access   Public
exports.getTotalCases = async (req, res, next) => {
  try {
    const countries = await Countries.find().select('total_cases');
    console.log(countries);
    let total = 0;
    for (i in countries) {
      let formatted_str = countries[i].total_cases.trim().replace(',', '');
      if (formatted_str === '') {
        formatted_str = 0;
      }
      total += parseInt(formatted_str);
    }
    console.log(total);
    res.status(200).json({ success: true, total_cases: total });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc     Get total recovered cases from COVID-19
// @route    GET /api/v1/countries/total-recovered
// @access   Public
exports.getTotalRecovered = async (req, res, next) => {
  try {
    const countries = await Countries.find().select('total_recovered');
    console.log(countries);
    let total = 0;
    for (i in countries) {
      let formatted_str = countries[i].total_recovered.trim().replace(',', '');
      if (formatted_str === '') {
        formatted_str = 0;
      }
      total += parseInt(formatted_str);
    }
    console.log(total);
    res.status(200).json({ success: true, total_recovered: total });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc     Get new cases for one last day from COVID-19
// @route    GET /api/v1/countries/new-cases
// @access   Public
exports.getNewCases = async (req, res, next) => {
  try {
    const countries = await Countries.find().select('new_cases');
    console.log(countries);
    let total = 0;
    for (i in countries) {
      let formatted_str = countries[i].new_cases.trim().replace(',', '');
      if (formatted_str === '') {
        formatted_str = 0;
      }
      total += parseInt(formatted_str);
    }
    console.log(total);
    res.status(200).json({ success: true, new_cases: total });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc     Get new deaths for one last day from COVID-19
// @route    GET /api/v1/countries/new-deaths
// @access   Public
exports.getNewDeaths = async (req, res, next) => {
  try {
    const countries = await Countries.find().select('new_deaths');
    console.log(countries);
    let total = 0;
    for (i in countries) {
      let formatted_str = countries[i].new_deaths.trim().replace(',', '');
      if (formatted_str === '') {
        formatted_str = 0;
      }
      total += parseInt(formatted_str);
    }
    console.log(total);
    res.status(200).json({ success: true, new_deaths: total });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// Post
exports.createTestCountry = async (req, res, next) => {
  const countries = await Countries.create(req.body);
  res.status(201).json({ success: true, data: countries });
};

// @desc     Get single country for COVID-19 data by id
// @route    GET /api/v1/countries/:id
// @access   Public
exports.getCountryById = async (req, res, next) => {
  const country = await Countries.findById(req.params.id);
  res.status(200).json({ success: true, data: country });
};
