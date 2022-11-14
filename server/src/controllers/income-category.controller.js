const db = require('../models');

const IncomeCategory = db.incomeCategories;

// Create and Save a new Income Category
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a Income Category
  const incomeCategory = new IncomeCategory({
    name: req.body.name,
    description: req.body.description,
    userId: '',
    archived: false,
    deleted: false,
  });

  // Save Income Category in the database
  incomeCategory
    .save(incomeCategory)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Income Category.',
      });
    });
};

// Find all existing Income Categories
exports.findAllExisting = (req, res) => {
  IncomeCategory.find({ archived: false, deleted: false })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Income Categories.',
      });
    });
};
