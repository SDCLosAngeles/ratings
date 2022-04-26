const {
  Reviews,
  Photos,
  Characteristics,
  CharacteristicRev
} = require('../index');
const _ = require('lodash');

const getReviews = function (productId, page = 1, count = 5, sort = 'helpfulness') {
  // console.log('This is the productId: ', productId);
  let data = {
    product: parseInt(productId),
    page: parseInt(page),
    count: parseInt(count),
    results: [],
  }
  var sortData = sort;
  // console.log('This is sortData: ', sortData);
  return Reviews.aggregate([
    {
      $match: {
        product_id: 'data.product'
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
    $sample: {
      size: data.count
    }
  ]).exec()
    .then((result) => {
      _.forEach(results, (review) => {
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
      return result;
    })
};

module.exports = getReviews;