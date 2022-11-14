/**
 *  /api/incomes - GET, POST
 */

module.exports = (app) => {
  const incomes = require('../controllers/income.controller.js');

  const router = require('express').Router();

  // Create a new Income
  router.post('/', incomes.create);

  // Retrieve all Incomes
  router.get('/', incomes.findAllExisting);

  app.use('/api/incomes', router);
};
