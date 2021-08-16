import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';

import models, { sequelize } from './models';
import routes from './routes';

const app = express();
const server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('front'));

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use('/api/todolist', routes.todolist);

/* 
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + '/../front/index.html'));
});
*/

const port = process.env.PORT || 8080;

const restartDataBaseOnStartUp = false;

sequelize.sync({ force: restartDataBaseOnStartUp }).then(async () => {
  server.listen(port, () => {
    console.log(`Application running on port: ${port}`);
  });
});