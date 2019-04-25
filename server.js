console.log('Server-side code running');

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// serve files from the public directory
app.use(express.static('public'));

// connect to the db and start the express server
let db;

// ***Replace the URL below with the URL for your database***
const url =  'mongodb://localhost:27017/daneel';
// E.g. for option 2) above this will be:
// const url =  'mongodb://localhost:21017/databaseName';

MongoClient.connect(url, (err, database) => {
  if(err) {
    return console.log(err);
  }
  db = database;
  // start the express web server listening on 3000
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// send BERNIE data to DB
app.post('/bernie', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    console.log(db);
  
    db.collection('bernie').save(click, (err, result) => {
      if (err) {
        return console.log(err);
      }
      console.log('click added to db');
      res.sendStatus(201);
    });
  });

// send KAMALA data to DB
  app.post('/kamala', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    console.log(db);
  
    db.collection('kamala').save(click, (err, result) => {
      if (err) {
        return console.log(err);
      }
      console.log('click added to db');
      res.sendStatus(201);
    });
  });

  // send JOE data to DB
  app.post('/joe', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    console.log(db);
  
    db.collection('joe').save(click, (err, result) => {
      if (err) {
        return console.log(err);
      }
      console.log('click added to db');
      res.sendStatus(201);
    });
  });


  // get BERNIE's number of votes
app.get('/bernie', (req, res) => {

    db.collection('bernie').find().toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
  });
// get Kamala's number of votes
  app.get('/kamala', (req, res) => {

    db.collection('kamala').find().toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
  });

  // get Joe's number of votes
  app.get('/joe', (req, res) => {

    db.collection('joe').find().toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
  });