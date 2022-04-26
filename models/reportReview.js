const {
  Reviews,
  Photos,
  Characteristics,
  CharacteristicRev
} = require('../index');

const reportReview = function (review_id) {
  return Reviews.findOneAndUpdate(
    { id: review_id },
    { reported: true }
  )
    .exec()
    .then((result) => {
      console.log('reportReview result:', result);
      return result;
    });
};

module.exports = reportReview;