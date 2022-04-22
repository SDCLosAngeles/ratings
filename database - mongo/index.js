const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const reviewSchema = mongoose.Schema({
  product_id: Number,
  rating: Number,
  date: Date,
  summary: String,
  body: String,
  recommend: Boolean,
  reported: Boolean,
  reviewer_name: String,
  reviewer_email: String,
  response: String,
  helpfulness: Number,
});

const characteristicSchema = mongoose.Schema({
  characteristic_id: Number,
  review_id: Number,
  value: Number,
});

const photoSchema = mongoose.Schema({
  review_id: Number,
  url: String,
});

const Reviews = mongoose.model('reviewsMain', reviewSchema);

const Characteristics = mongoose.model('reviewsCharacteristics', characteristicSchema);

const Photos = mongoose.model('reviewsPhotos', photoSchema);

module.exports {
  Reviews,
    Characteristics,
    Photos,
};