const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path  = require('path');
const http  = require('http');
const { models, sequelize } = require('./models');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json({ strict: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use('/api/event-history-data', routes.eventdata);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

const port = process.env.PORT || 8080;

const restartDataBaseOnStartUp = false;

sequelize.sync({ force: restartDataBaseOnStartUp }).then(async () => {
  server.listen(port, () => {
    console.log(`Application running on port: ${port}`);
  });
});