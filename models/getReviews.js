const {
  Reviews,
  Photos,
  Characteristics,
  CharacteristicRev
} = require('../database/index');
const _ = require('lodash');

const getReviews = function (productId, page = 1, count = 5, sort = 'helpfulness', callback) {
  // console.log('This is the productId: ', productId);

  var sortData = sort;
  // console.log('This is sortData: ', sortData);
  Reviews.aggregate([
    {
      $match: {
        product_id: parseInt(productId)
      }
    },
    {
      $lookup: {
        from: 'reviews_photos',
        localField: 'id',
        foreignField: 'review_id',
        as: 'photos'
      }
    },
    {
      $sort: {
        helpfulness: -1
      }
    },
    {
      $sample: {
        size: parseInt(count)
      }
    }
  ]).exec(function (err, queryResults) {

    if (err) throw error;
    let data = {
      product: parseInt(productId),
      page: parseInt(page),
      count: parseInt(count),
      results: [],
    }
    // .then((queryResults) => {
    _.forEach(queryResults, (review) => {
      data.results.push({
        review_id: review.id,
        rating: review.rating,
        summary: review.summary,
        recommend: review.recommend,
        response: review.response,
        body: review.body,
        date: review.date,
        reviewer_name: review.reviewer_name,
        helpfulness: review.helpfulness,
        photos: review.photos,
      })
    })
    callback(data)
    // return results;
  })
};

module.exports = getReviews;