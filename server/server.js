const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./src/models');
const tutorialRoutes = require('./src/routes/tutorial.routes');
const incomeCategoryRoutes = require('./src/routes/income-category.routes');
const incomeRoutes = require('./src/routes/income.routes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// connect to database
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

// serve doc folder as static
app.use(express.static(`${__dirname}/doc`));

// simple route
app.get('/', (req, res) => {
  res.sendFile('doc/index.html', { root: __dirname });
});

tutorialRoutes(app);
incomeCategoryRoutes(app);
incomeRoutes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
