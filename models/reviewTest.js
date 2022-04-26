const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/sdc/test'
const _ = require('lodash');

mongoose.connect(url, (err, db) => {
  if (err) {
    throw (err);
  }
  console.log(db);
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting'))
db.once('open', function () {
  console.log('Connected Mongo = Happy Mongo');
});

const reviewSchema = mongoose.Schema({
  product_id: Number,
  review_id: Number,
  rating: Number,
  summary: String,
  recommend: Boolean,
  response: String,
  body: String,
  date: String,
  reviewer_name: String,
  helpfulness: Number,
});

const Reviews = mongoose.model(Reviews, reviewSchema, 'reviews');

const reviewTest = new Reviews({
  product_id: 1,
  review_id: 1,
  rating: 4,
  summary: 'Awesome sauce!',
  recommend: true,
  body: 'Lovin it',
  date: '07/04/2021',
  reviewer_name: 'fireworks',
  helpfulness: 9,
})

reviewTest.save((err, res) => {
  if (err) {
    throw err;
  }
  console.log('Added to database successfully');
});