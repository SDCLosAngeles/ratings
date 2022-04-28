require('dotenv').config();
const express = require('express');
const app = express();
const getReviews = require('../models/getReviews');
// const saveReview = require('../models/saveReview');
// const getMeta = require('../models/getMeta');
// const markHelpful = require('../models/markHelpful');
// const reportReview = require('../models/reportReview');


// app.get('/', (req, res) => {
//   res.json({ data: "This is my api" })
// });

// app.get('/reviews', (req, res) => {
//   const { product_id, page, count, sort } = req.query;
//   console.log('This is the stuff ', product_id, page, count, sort);

//   getReviews(product_id, page, count, sort)
//     .then((results) => {
//       // console.log()

//       res.status(200).send(results);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500); // Internal Server Error
//     })
//   // res.end();
// })


const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

app.get('/reviews', (req, res) => {
  const { product_id, page, count, sort } = req.query;
  console.log('This is the stuff ', product_id, page, count, sort);

  getReviews(product_id, page, count, sort, function (data) {
    handleResponse(res, data)
  })
});

// app.post('/reviews', (req, res) {
//   saveReview(req.body)
// })


app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});


