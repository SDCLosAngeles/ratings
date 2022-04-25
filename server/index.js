const express = require('express')



const app = express();
// app.use(express.static(__dirname + '/../'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/reviews/', function (req, res) {
  reviews.find({}).exec(function (err, allReviews) {
    if (err) {
      console.log(err);
      return (res.status(500).json({ message: 'Internal Server Error' }));
    }
    return res.status(200).json({
      data: allReviews
    });
  });
});


app.get('/reviews/meta', function (req, res) {

})


/*
const getReviews = (params) => instance.get(
  'reviews',
  { params },
);

const addReview = (
  productId,
  rating,
  summary,
  body,
  recommend,
  name,
  email,
  photos,
  characteristics,
) => instance.post(
  'reviews',
  {
    product_id: productId,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
  },
);

const markReviewHelpful = (reviewId) => instance.put(
  `/reviews/${reviewId}/helpful`,
);

const reportReview = (reviewId) => instance.put(
  `/reviews/${reviewId}/report`,
);

module.exports = {
  getReviews,
  addReview,
  markReviewHelpful,
  reportReview,
};
*/