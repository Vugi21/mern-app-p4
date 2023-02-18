const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const { MongoClient } = require('mongodb');

require('dotenv').config();
require('./config/database');

//const usersRouter = require('./api/routes/users')
const puppiesRouter = require('./routes/puppies')
const countriesRouter = require('./routes/countries')
const usersRouter = require('./routes/users')

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
//app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));



// Put API routes here, before the "catch all" route

//app.use('/api/users', usersRouter);


// puppies route
app.use('/api', puppiesRouter);


app.use('/countries', countriesRouter);

app.use('/api/users', usersRouter)

const client = new MongoClient(`${process.env.DATABASE_URL}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  });


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
   // res.sendFile(path.join(__dirname, 'build', 'index.html'));
    const collection = client.db('test').collection('countries');
    collection.find({}).toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving data from database');
        return{
            newCountries: docs
        };
      }
      res.send(docs);
      
    });
  });



  // Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

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