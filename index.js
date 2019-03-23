

const express = require('express');

const app = express();

// GET endpoint
app.get('/', function(req, res){
  // res.send('Hello world')
  const array = ['Hello world']
  res.json(array);
})


app.listen(8080, function(){
  console.log('listening')
})


// TODO
// connect to mongoose collection w/schema
// error handler middleware : response in postman needs to be friendly
// wire up router 
// Post endpoint (to add to database)
