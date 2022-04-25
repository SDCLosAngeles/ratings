const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/sdc', {
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting'))
db.once('open', function () {
  console.log('Connected Mongo = Happy Mongo');
})

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

const characteristicSchema = mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
});

const characteristicRevSchema = mongoose.schema({
  id: Number,
  characteristic_id: Number,
  review_id: Number,
  value: Number,
})

const photoSchema = mongoose.Schema({
  id: Number,
  review_id: Number,
  url: String,
});

const Reviews = mongoose.model(Reviews, reviewSchema, 'reviews');

const Characteristics = mongoose.model(Characteristics, characteristicSchema, 'characteristics');

const CharacteristicRev = mongoose.model(CharacteristicRev, characteristicRevSchema, 'characteristic_reviews');

const Photos = mongoose.model(Photos, photoSchema, 'reviews_photos');

module.exports = {
  Reviews,
  Photos,
  Characteristics,
  CharacteristicRev,
};