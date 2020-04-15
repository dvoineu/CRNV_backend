const express = require('express');
const {
  getCountries,
  getCountry,
  getTotalCases,
  getTotalRecovered,
  getTotalDeaths,
  getNewCases,
  getNewDeaths,
  createTestCountry,
  getCountryById
} = require('../controllers/countries');

const router = express.Router();

router.route('/').get(getCountries);
router.route('/country/:country_name').get(getCountry);
// router.route('/:id').get(getCountryById);
router.route('/total-confirmed').get(getTotalCases);
router.route('/total-recovered').get(getTotalRecovered);
router.route('/total-deaths').get(getTotalDeaths);
router.route('/new-cases').get(getNewCases);
router.route('/new-deaths').get(getNewDeaths);
router.route('/test').post(createTestCountry);

module.exports = router;
