const mongoose = require('mongoose');

const dbConfig = require('../config/db.config.js');
const createTutorialsCollection = require('./tutorial.model.js');
const createIncomeCategoriesCollection = require('./income-category.model.js');
const createIncomesCollection = require('./income.model.js');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = createTutorialsCollection(mongoose);
db.incomeCategories = createIncomeCategoriesCollection(mongoose);
db.incomes = createIncomesCollection(mongoose);

module.exports = db;
