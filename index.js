'use strict'

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const morgan = require('morgan');

const app = express();

const { Kitten } = require('./models');
const { DATABASE_URL } = require('./config')
const { router: kittenRouter } = require('./router')

// Added morgan logging to see requests in console
app.use(morgan('common'));


// Use the router to access the endpoints
app.use('/kittens', kittenRouter);

// added db url in .env file, required in the config. useful for testing
mongoose.connect(DATABASE_URL); //returns promise

// make sure db is finished connecting. then listen
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('listening and connected to mongoose') // I see this in logs!
});

// Be sure to put all logic before app.listen
// Error handler: https://expressjs.com/en/guide/error-handling.html
app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something is borked!')
})


app.listen(8080, function(){
  console.log('listening')
})


// TODOS
// connect to mongoose collection w/schema DONE

// error handler middleware : response in postman needs to be friendly DONE

// wire up router (endpoints not working yet, so not wired up yet) DONE
// docs for router: https://expressjs.com/en/guide/routing.html

// Post endpoint (to add to database) started; but it is not working DONE
