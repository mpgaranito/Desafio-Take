require('dotenv').config();

// Constants
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const express = require('express');
const ip = require('ip');

const app = express();

const {
  logger,
} = require('./middlewares');

const OrgRoutes = require('./modules/get-org/get-org-routes');


app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', [OrgRoutes]);


const startServer = async () => {
  app.listen(PORT, () => {
    logger.info(
      `${`Server is running at port ${PORT}, see more about the application on: http://${ip.address()}:${PORT}/api/docs`}`
    );
  });
};

(async () => {
  await startServer();
})();

module.exports = app;
