const db = require('../models');

const Income = db.incomes;

/**
 * @api {post} /incomes Create a new Income
 * @apiVersion 0.0.1
 * @apiName PostIncome
 * @apiGroup Income
 *
 * @apiBody {String}  name              Name of the Income
 * @apiBody {String}  [description]     Description for the Income
 * @apiBody {String}  userId            User id who created the Income
 * @apiBody {String}  categoryId        Category id of the Income
 * @apiBody {Number}  value             Value of the Income
 * @apiBody {String}  currency          Currency of the Income
 * @apiBody {Date}    date=Current_date User specified date of Income
 *
 * @apiSuccess {String}  id          The new Income id
 * @apiSuccess {String}  name        Income name
 * @apiSuccess {String}  description Income description
 * @apiSuccess {String}  userId      User id who created Income
 * @apiSuccess {String}  categoryId  Category id of the Income
 * @apiSuccess {Boolean} archived    If Income is archived
 * @apiSuccess {Boolean} deleted     If Income is deleted
 * @apiSuccess {Number}  value       Value of the Income
 * @apiSuccess {String}  currency    Currency of the Income
 * @apiSuccess {Date}    date        User specified date of Income
 * @apiSuccess {Date}    createdAt   Automatically set date of creation
 * @apiSuccess {Date}    updatedAt   Automatically set date of updating
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

  // Create an Income
  const income = new Income({
    name: req.body.name,
    description: req.body.description,
    userId: '',
    categoryId: req.body.categoryId,
    archived: false,
    deleted: false,
    value: req.body.value,
    currency: req.body.currency,
    date: new Date(req.body.date) || new Date(),
  });

  // Save Income in the database
  income
    .save(income)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Income.',
      });
    });
};

/**
 * @api {get} /incomes Read data of all Incomes
 * @apiVersion 0.0.1
 * @apiName GetAllIncomes
 * @apiGroup Income
 *
 * @apiDescription Retrieve all existing Incomes
 *
 * @apiSuccess {Object[]} income             List of Incomes (Array of Objects)
 * @apiSuccess {String}   income.name        Income Name
 * @apiSuccess {String}   income.description Income Description
 * @apiSuccess {String}   income.userId      Income User id
 * @apiSuccess {String}   income.categoryId  Income Category id
 * @apiSuccess {Boolean}  income.archived    Income Archived
 * @apiSuccess {Boolean}  income.deleted     Income Deleted
 * @apiSuccess {Number}   income.value       Income Value
 * @apiSuccess {String}   income.currency    Income Currency
 * @apiSuccess {Date}     income.date        Income Date
 *
 * @apiError (500 Internal Server Error) InternalServerError Some error occurred while retrieving Incomes.
 */
exports.findAllExisting = (req, res) => {
  Income.find({ archived: false, deleted: false })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Incomes.',
      });
    });
};
