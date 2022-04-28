const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// app.use(express.static(__dirname + '/../'))

const getReviews = require('../database/models/getReviews');
const saveReview = require('../database/models/saveReview');
const getMeta = require('../database/models/getMeta');
const markHelpful = require('../database/models/markHelpful');
const reportReview = require('../database/models/reportReview');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use('/', express.static(path.join(__dirname, '../public/')));


// app.get('/reviews', (req, res) => {
//   const { product_id, page, count, sort } = req.query;
//   // console.log('This is the product id: ', product_id);

//   getReviews(product_id, page, count, sort)
//     .then((resultData) => {
//       // console.log(/* */)

//       res.status(200).send(resultData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500); // Internal Server Error
//     })
// })

app.get('/', (req, res) => {
  res.json({ data: "This is my api" })
});


// app.get('/reviews/meta', (req, res) => {
//   getMeta(req.query.product_id)
//     .then((results) => {    /*results*/
//       // console.log('results sent to client', results)

//       res.status(200).send(results)   /*results*/
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500); // Internal Servor Error
//     })
// })


// app.post('/reviews', (req, res) => {
//   saveReview(req.body)
//     // console.log('This is the req.body: ', req.body)
//     .then((results) => {
//       res.sendStatus(201) // 'Review successfully created'
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500) // Internal Servor Error
//     })
// })


// // '/reviews/:review_id/helpful'
// app.put(`/reviews/${review_id}/helpful`, (req, res) => {
//   const { review_id } = req.params;
//   // console.log('review_id for marking helpful: ', review_id);
//   markHelpful(review_id)
//     .then((results) => {
//       res.sendStatus(204); // Success - no content
//     })
//     .catch((err) {
//       console.log(err);
//       res.sendStatus(500); // Internal Servor Error
//     })
// })


// // '/reviews/:review_id/report'
// app.put(`/reviews/${review_id}/report`, (req, res) => {
//   const { review_id } = req.params;
//   reportReview(review_id)
//     .then((/*results*/) => {
//       res.sendStatus(204); // Success - no content
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500);
//     })
// })

module.exports = {
  app,
}

// /*
// const getReviews = (params) => instance.get(
//   'reviews',
//   { params },
// );

// const addReview = (
//   productId,
//   rating,
//   summary,
//   body,
//   recommend,
//   name,
//   email,
//   photos,
//   characteristics,
// ) => instance.post(
//   'reviews',
//   {
//     product_id: productId,
//     rating,
//     summary,
//     body,
//     recommend,
//     name,
//     email,
//     photos,
//     characteristics,
//   },
// );

// const markReviewHelpful = (reviewId) => instance.put(
//   `/reviews/${reviewId}/helpful`,
// );

// const reportReview = (reviewId) => instance.put(
//   `/reviews/${reviewId}/report`,
// );

// module.exports = {
//   getReviews,
//   saveReview,
//   markReviewHelpful,
//   reportReview,
// };
