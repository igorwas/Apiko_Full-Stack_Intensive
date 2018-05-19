const createError = require('http-errors');
const express = require('express');
const path = require('path');
const config = require('./config');
const { MongoManager } = require('./src/mongo');
const { passport } = require('./src/passport');
const api = require('./src/api')
const app = express();
const mongoManager = new MongoManager(config);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoManager.connect();
//auth
app.use(passport.initialize());

app.use('/api/v1', api(config));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
