const express = require('express');
const morgan = require('morgan');
const routes = require('../api/routes');

const app = express();

app.use(morgan(process.env.NODE_ENV || 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} not found`);
  error.status = 404;
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.send('ok');
});

module.exports = app;
