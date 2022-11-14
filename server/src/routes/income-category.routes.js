/**
 *  /api/income-categories - GET, POST
 */

module.exports = (app) => {
  const incomeCategories = require('../controllers/income-category.controller.js');

  const router = require('express').Router();

  // Create a new Income Category
  router.post('/', incomeCategories.create);

  // Retrieve all Income Categories
  router.get('/', incomeCategories.findAllExisting);

  app.use('/api/income-categories', router);
};
