const db = require('../models');

const IncomeCategory = db.incomeCategories;

/**
 * @api {post} /income-categories Create a new Income Category
 * @apiVersion 0.0.1
 * @apiName PostIncomeCategory
 * @apiGroup IncomeCategory
 *
 * @apiBody {String}  name              Name of the Income Category
 * @apiBody {String}  [description]     Description for the Income Category
 *
 * @apiSuccess {String}  id          The new Income Category id
 * @apiSuccess {String}  name        Income Category name
 * @apiSuccess {String}  description Income Category description
 * @apiSuccess {String}  userId      User id who created Income Category
 * @apiSuccess {Boolean} archived    If Income Category is archived
 * @apiSuccess {Boolean} deleted     If Income Category is deleted
 *
 * @apiError ContentNotFound             Content can not be empty!
 * @apiError (500 Internal Server Error) InternalServerError Some error occurred while creating the Income.
 */
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create an Income Category
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

/**
 * @api {get} /income-categories Read data of all Income Categories
 * @apiVersion 0.0.1
 * @apiName GetAllIncomeCategories
 * @apiGroup IncomeCategory
 *
 * @apiDescription Retrieve all existing Income Categories
 *
 * @apiSuccess {Object[]} incomeCategory             List of Income Categories (Array of Objects)
 * @apiSuccess {String}   incomeCategory.id          Income Category id
 * @apiSuccess {String}   incomeCategory.name        Income Category Name
 * @apiSuccess {String}   incomeCategory.description Income Category Description
 * @apiSuccess {String}   income.userId              User id who created Income Category
 * @apiSuccess {Boolean}  income.archived            Income Category Archived
 * @apiSuccess {Boolean}  income.deleted             Income Category Deleted
 *
 * @apiError (500 Internal Server Error) InternalServerError Some error occurred while retrieving Incomes.
 */
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
